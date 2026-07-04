<template>
	<div class="heatmap-grid">
		<div v-if="loading" class="spinner"></div>

		<div
			class="heatmap-square"
			v-for="n in 30"
			:key="n"
			:style="{ backgroundColor: heatData[30 - n] ? colorHandler(heatData[30 - n]) : '' }"
			:data-day="getTooltip(30 - n)"
		></div>
	</div>
</template>

<style scoped>
.heatmap-grid {
	position: relative;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(10, 1fr);
	grid-auto-flow: column;
	gap: 5px;
}

.heatmap-square {
	position: relative;
	border-radius: 5px;

	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.15);

	aspect-ratio: 1;
	align-self: end;
}

.heatmap-square::after {
	content: attr(data-day);

	position: absolute;
	display: block;

	opacity: 0;
	visibility: hidden;

	bottom: 120%;
	left: 50%;
	transform: translateX(-50%);
	border: 1px solid rgba(255, 255, 255, 0.15);
	background-color: #1a1a1e;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	color: white;

	padding: 5px 10px;
	white-space: nowrap;

	pointer-events: none;
	border-radius: 10px;
	transition:
		opacity 0.15s ease,
		visibility 0.15s ease;
	z-index: 10;
}
.heatmap-square:hover::after {
	opacity: 1;
	visibility: visible;
}

.spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	border: 6px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: rgba(250, 100, 160, 1);
	width: 50px;
	height: 50px;
	z-index: 10;
	animation: spin 1s linear infinite;
}
@keyframes spin {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
/*here the guy with no idea of css using flex when there's a propery that makes columns*/
/*.heatmap-container {
	display: flex;
	flex-direction: column;
}
.heatmap-row {
	display: flex;
	flex-direction: row;
}
.heatmap-square {
	background-color: red;
	width: 10%;
	height: 25px;
	margin: 5px;
}*/
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { unsafeWindow } from "$";
console.vLog("Initializing heatmap");

const loading = ref(true);
// I love you genius devs
console.vLog(unsafeWindow.CURRENT_USER);

const heatData = ref<number[]>(Array.from({ length: 30 }, () => 0));
const normalize = (d: Date) => {
	const date = new Date(d);
	date.setHours(0, 0, 0, 0);
	return date;
};

const today = normalize(new Date());
async function getHeat(userID: string) {
	let nextCursor = null;
	// 1 - today | 30 - 29 days ago
	const heat = new Array<number>();
	const contributions = [];

	// sorry genius devs. Make an endpoint which only returns the top contributions with no metadata
	// unsafeWindow.CURRENT_USER.id
	const res = await fetch(`https://genius.com/api/users/${userID}/contributions?per_page=50&text_format=plain`);
	const data = await res.json();

	contributions.push(...data.response.contribution_groups);

	let dataLength = data.response.contribution_groups.length;

	// that word does not exist for sure 😭
	let dataOldacy = getDaysAgo(data.response.contribution_groups[dataLength - 1].date);
	nextCursor = data.response.next_cursor;
	while (nextCursor && dataOldacy < 30) {
		console.vLog("less than 30d");

		//let elmToPush;
		// if (dataOldacy < 10) elmToPush = 50; // if you trigger this, please touch grass
		// if (dataOldacy >= 10) elmToPush = 40;
		// if (dataOldacy >= 20) elmToPush = 30;

		const reFetchRes = await fetch(`https://genius.com/api/users/${userID}/contributions?per_page=50&text_format=plain&next_cursor=${nextCursor}`);
		const reFetchData = await reFetchRes.json();
		console.log(reFetchData);

		contributions.push(...reFetchData.response.contribution_groups);
		dataLength = reFetchData.response.contribution_groups.length;
		dataOldacy = getDaysAgo(reFetchData.response.contribution_groups[dataLength - 1].date);
		console.log(dataLength, dataOldacy);
		nextCursor = reFetchData.response.next_cursor;
	}

	for (const elm of contributions) {
		const daysAgo = getDaysAgo(elm.date);

		if (daysAgo > 30) break;

		heat[daysAgo] = (heat[daysAgo] ?? 0) + 1;
	}
	return heat;
}
const dateFormatter = new Intl.DateTimeFormat("en-US", {
	weekday: "short",
	day: "numeric",
	month: "short",
	year: "numeric",
});

const DAY = 1000 * 60 * 60 * 24;
function getDaysAgo(date: number) {
	const elmDate = normalize(new Date(date * 1000));
	const delta = today.getTime() - elmDate.getTime();
	return Math.round(delta / DAY);
}

function getTooltip(daysAgo: number) {
	const date = new Date(today.getTime());
	date.setDate(date.getDate() - daysAgo);

	const formattedParts = dateFormatter.format(date);

	const [weekday, month, day, year] = formattedParts.replace(/,/g, "").split(" ");
	const cleanDateStr = `${weekday}, ${day} ${month} ${year}`;

	const actions = heatData.value[daysAgo] ?? 0;

	return `${cleanDateStr}: ${actions} contributions`;
}

function colorHandler(contributions: number) {
	if (contributions <= 5) {
		return `rgba(250, 100, 160, ${Math.min(0.2 * contributions, 1)})`;
	}
	const mixWeight = Math.min(((contributions - 5) / (10 - 5)) * 100, 100);

	// color-mix(in srgb, base-color, mix-color weight%)
	return `color-mix(in srgb, rgb(250, 100, 160) 100%, rgb(128, 100, 250) ${mixWeight}%)`;
}
onMounted(async () => {
	const userIDElem = document.querySelector('meta[property="twitter:app:url:iphone"]');
	if (!userIDElem) {
		console.vLog("Failed to scrap UserID");
		return;
	}
	//@ts-ignore
	const userID = userIDElem.content.replace("genius://users/", "");
	console.vLog(userID);
	heatData.value = await getHeat(userID);
	loading.value = false;
	console.vLog(heatData.value);
});
</script>
