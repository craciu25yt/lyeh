<template>
	<div v-if="visible" class="overlay" @click.self="dismiss">
		<div class="box">
			<button class="close" @click="dismiss">&times;</button>
			<h2 class="title">Lyeh — Updated</h2>
			<p class="version">
				<span class="old">{{ oldVersion }}</span>
				<span class="arrow">&rarr;</span>
				<span class="new">{{ newVersion }}</span>
			</p>
			<div v-if="entries.length" class="changelog">
				<div v-for="entry in entries" :key="entry.title" class="entry">
					<h3 class="entry-title">{{ entry.title }}</h3>
					<ul class="entry-items">
						<li v-for="(item, i) in entry.items" :key="i">{{ item }}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface ChangelogEntry {
	title: string;
	items: string[];
}

const visible = ref(false);
const oldVersion = ref("");
const newVersion = ref("");
const entries = ref<ChangelogEntry[]>([]);

function handler(e: CustomEvent<{ oldVersion: string; newVersion: string; entries: ChangelogEntry[] }>) {
	oldVersion.value = e.detail.oldVersion;
	newVersion.value = e.detail.newVersion;
	entries.value = e.detail.entries || [];
	visible.value = true;
}

function dismiss() {
	visible.value = false;
}

onMounted(() => {
	window.addEventListener("lyeh:version-mismatch", handler as EventListener);
});

onUnmounted(() => {
	window.removeEventListener("lyeh:version-mismatch", handler as EventListener);
});
</script>

<style scoped>
.overlay {
	position: fixed;
	inset: 0;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.65);
	backdrop-filter: blur(2px);
}

.box {
	position: relative;
	background: rgba(255, 255, 255, 0.08);
	backdrop-filter: blur(20px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 24px;
	padding: 48px 64px;
	text-align: center;
	box-shadow:
		0 8px 64px rgba(0, 0, 0, 0.5),
		inset 0 1px 0 rgba(255, 255, 255, 0.1);
	min-width: 320px;
}

.close {
	position: absolute;
	top: 12px;
	right: 16px;
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.5);
	font-size: 28px;
	cursor: pointer;
	padding: 0;
	line-height: 1;
}

.close:hover {
	color: #fff;
}

.title {
	margin: 0 0 16px;
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	letter-spacing: -0.02em;
}

.version {
	margin: 0;
	font-size: 18px;
	color: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	gap: 12px;
	justify-content: center;
}

.old {
	text-decoration: line-through;
	opacity: 0.5;
}

.arrow {
	font-size: 22px;
	opacity: 0.6;
}

.new {
	font-weight: 600;
	color: #fff;
}

.changelog {
	margin-top: 24px;
	max-height: 300px;
	overflow-y: auto;
	text-align: left;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding-top: 16px;
}

.entry {
	margin-bottom: 16px;
}

.entry:last-child {
	margin-bottom: 0;
}

.entry-title {
	margin: 0 0 8px;
	font-size: 16px;
	font-weight: 700;
	color: rgba(255, 255, 255, 0.9);
}

.entry-items {
	margin: 0;
	padding-left: 20px;
	list-style: disc;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.6;
}

.entry-items li {
	margin-bottom: 2px;
}
</style>
