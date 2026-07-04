<template>
	<div v-if="display" class="spotify-container">
		<!-- <div v-if="!isReady">Failed to connect to Spotify device</div> -->

		<div class="spotify-player">
			<div class="cover-wrapper">
				<img class="player-cover" :src="songCover" alt="" />
			</div>
			<div class="spotify-metadata">
				<span class="song-name">{{ songName || "Error" }}</span>
				<span class="song-artists">{{ songArtists || "Error" }}</span>
			</div>

			<button @click="togglePlayback" class="playback-button">
				<svg v-if="isPlaying" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13 13H19V31H13V13ZM25 13H31V31H25V13Z"></path></svg>
				<svg v-else class="btn-icon" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M48 27.6667L18 11V44.3333L48 27.6667Z" />
				</svg>
			</button>

			<div class="progress-container">
				<span class="time-text">{{ formatTime(position) }}</span>
				<input
					type="range"
					class="progress-slider"
					min="0"
					:max="currentTrack?.duration_ms"
					:value="position"
					@input="(e) => seek(Number((e.target as HTMLInputElement).value))"
				/>
				<span class="time-text">{{ formatTime(currentTrack?.duration_ms) }}</span>
			</div>
			<div class="logo-wrapper">
				<img class="spotify-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.spotify-container {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 20px;
	z-index: 50;

	display: flex;
	align-items: center;

	width: var(--settings-player-width);
	height: 7.5vh;

	background-color: rgba(21, 16, 16, 0.5);
	border-radius: 10px;
	backdrop-filter: blur(15px);
	border: 1px solid rgba(255, 255, 255, 0.15);

	padding: 7px;
}
.spotify-player {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 12px;
}
.cover-wrapper {
	padding: 1px;
	height: 100%;
}

.player-cover {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}

.logo-wrapper {
	padding: 1px;
	padding-right: 20px;
	height: 40%;
}
.spotify-logo {
	fill: white;
	width: 100%;
	height: 100%;
	border-radius: 5px;
}

.spotify-metadata {
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: 0;
	flex: 1;
	line-height: 1.1;
	max-width: 100px;
}
.song-name,
.song-artists {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis; /* Changes to 'clip' if you don't want dots (...) */
	width: 100%;
	font-size: 15px;
}
.song-artists {
	font-size: 11px;
	color: rgba(255, 255, 255, 0.7);
}

.playback-button {
	cursor: pointer;
	padding: 2px;

	width: 40px;
	height: 40px;
}

.progress-container {
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 10px;
	margin-right: 12px;
}
.time-text {
	font-size: 11px;
	color: rgba(255, 255, 255, 0.7);
	font-family: sans-serif;
	white-space: nowrap;
}
.progress-slider {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	background: rgba(255, 255, 255, 0.2);
	height: 3px;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	transition: background 0.1s ease;
}

.progress-slider::-moz-range-thumb {
	width: 12px;
	height: 12px;
	border: none;
	border-radius: 50%;
	background: #ffffff;
	transition: transform 0.1s ease;
}
</style>
<script setup lang="ts">
/// <reference types="@types/spotify-web-playback-sdk" />
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { GM_getValue, GM_setValue } from "$";

//@ts-ignore
const { unsafeWindow } = typeof GM !== "undefined" ? GM : { unsafeWindow: window };

const display = ref(false); // stage 1, if lyric page, stright show
const isReady = ref(false); // stage 2, after sdk is launched, allow
const isPlaying = ref(false);

const songName = ref("");
const songArtists = ref("");
const songCover = ref("");

let lyrics: Array<Object | string> | null = null;
let spotifyArtists: Object | null = null;
let itunesArtists: String | null = null;
let lrclibArtist: String | null = null;
let appleMusicID: String | null = null;

const position = ref(0);
const currentTrack = ref<Spotify.Track | null>(null);
const currentState = ref<Spotify.PlaybackState | null>(null);
let player: Spotify.Player | null = null;

const syncedLines = ref<{ time: number; text: string }[]>([]);
const lineMap = ref(new Map<number, HTMLElement>());
const currentLineIndex = computed(() => {
	const pos = position.value;
	const lines = syncedLines.value;
	if (!lines.length) return -1;
	let idx = -1;
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].time <= pos) {
			idx = i;
		} else {
			break;
		}
	}
	return idx;
});

async function getValidToken() {
	const expiresAt = await GM_getValue("spotify:expiration", 0);
	let accessToken = await GM_getValue("spotify:access_token");

	if (Date.now() > expiresAt) {
		const refreshToken = await GM_getValue("spotify:refresh_token");
		if (!refreshToken) return null;

		try {
			const res = await fetch(`https://lyeh.auchen.net/api/oauth2/refresh?refresh_token=${refreshToken}`, { method: "POST" });
			const data = await res.json();
			accessToken = data.access_token;
			GM_setValue("spotify:access_token", accessToken);
			GM_setValue("spotify:expiration", Date.now() + data.expires_in * 1000);
		} catch (e) {
			console.error("Genie failed token rotation:", e);
			return null;
		}
	}
	return accessToken;
}

async function initPlayer() {
	const SpotifyNamespace = unsafeWindow.Spotify;
	if (!SpotifyNamespace) return;

	const token = await getValidToken();
	if (!token) {
		return;
	}

	player = new SpotifyNamespace.Player({
		name: "Genius (Lyeh)",
		getOAuthToken: async (cb: any) => {
			cb(await getValidToken());
		},
		volume: 0.5,
	});
	if (!player) return;

	player.addListener("ready", async ({ device_id }) => {
		GM_setValue("spotify:device_id", device_id);
		isReady.value = true;
		const token = await getValidToken();

		const cache = GM_getValue(`cache:lyrics:${appleMusicID}`);
		let lrclibReq: Promise<Response> | null = null;

		let lrclib;

		if (!cache) {
			// lrc takes its time, so let it run in the background
			lrclibReq = fetch(`https://lrclib.net/api/get?artist_name=${lrclibArtist}&track_name=${songName.value.replace(" ", "+")}`);
		} else {
			lrclib = cache;
		}

		//----
		await fetch("https://api.spotify.com/v1/me/player", {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				device_ids: [device_id],
				play: false,
			}),
		});

		//const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(`${songName.value} ${itunesArtists}`)}&media=music&entity=song&limit=1`);
		//const res = await fetch(`https://itunes.apple.com/lookup?id=${appleMusicID}`);
		//const data = await res.json();
		//console.log(data, appleMusicID);
		//if (data.resultCount != 1) {
		//	console.sLog("Failed to query song from iTunes via id. Attempting via Name");
		//}
		const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${songName.value} ${spotifyArtists}`)}&type=track&limit=1`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// Use "uris" (array) for specific tracks, or "context_uri" for albums/playlists
				uris: [data.tracks.items[0].uri],
			}),
		});
		player!.togglePlay();
		//----
		let cleanLyrics = [];
		let currentLineBuffer = "";
		for (const line of lyrics!) {
			//@ts-ignore
			if (line && line.tag === "br") {
				const finishedLine = currentLineBuffer.trim();
				if (finishedLine && !finishedLine.startsWith("[")) {
					cleanLyrics.push(finishedLine);
				}
				currentLineBuffer = ""; // Flush the buffer
				continue;
			}

			if (typeof line === "string" && line.startsWith("[")) {
				continue;
			}

			const text = clearText(line);
			if (text) currentLineBuffer += text;
		}
		console.log(cleanLyrics);
		if (lrclibReq) {
			const response = await lrclibReq;
			const data = await response.json();
			GM_setValue(`cache:lyrics:${appleMusicID}`, data);
			lrclib = data;
			console.log;
		}
		let syncedLyrics = null;
		if (lrclib.syncedLyrics) {
			syncedLyrics = lrclib.syncedLyrics.split("\n") || null;
		}
		const validLyrics = [];
		let i = 0;
		for (const line of syncedLyrics) {
			if (!cleanLyrics[i]) break;
			const similar = similarity(line.split("]")[1], cleanLyrics[i]);
			console.log(similar, line.split("]")[1], cleanLyrics[i]);
			if (similar > 0.4) {
				i++;
				validLyrics.push(line);
			}
		}

		console.log(validLyrics);
		syncedLines.value = parseSyncedLyrics(syncedLyrics);
		wrapAndInject();
		isReady.value = true;
	});
	player.addListener("not_ready", ({ device_id }) => {
		isReady.value = false;
	});

	player.addListener("player_state_changed", (state) => {
		if (!state) return;
		isPlaying.value = !state.paused;
		currentTrack.value = state.track_window.current_track;
		currentState.value = state;

		position.value = state.position;
	});

	player.addListener("initialization_error", ({ message }) => console.error(message));
	player.addListener("authentication_error", ({ message }) => console.error(message));
	player.addListener("account_error", ({ message }) => console.error(message));

	player.connect();
}
const formatTime = (ms: number | undefined) => {
	if (!ms) return "0:00";

	const totalSeconds = Math.floor(ms / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function togglePlayback() {
	if (player) {
		player.togglePlay();
		return;
	}
	initPlayer();
}
const ALLOWED_TAGS = new Set(["i", "b", "strong", "em", "span", "a"]);

function clearText(node: any): string | null {
	if (typeof node == "string") {
		return node.trim() == "" ? null : node;
	}
	if (node && typeof node == "object" && node.children) {
		if (node.tag && !ALLOWED_TAGS.has(node.tag)) return null;

		let text = "";
		for (let i = 0; i < node.children.length; i++) {
			const result = clearText(node.children[i]);
			if (result) {
				text += result;
			}
		}
		return text || null;
	}
	return null;
}
async function seek(value: number) {
	if (!player) return;

	await player.seek(value);
	position.value = value;
}
let interval: number | null = null;

//@ts-ignore
watch(isPlaying, (playing) => {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}

	if (playing) {
		let lastTick = performance.now();

		interval = window.setInterval(() => {
			const now = performance.now();
			position.value += now - lastTick;
			lastTick = now;
		}, 100);
	}
});

function parseSyncedLyrics(lines: string[] | null): { time: number; text: string }[] {
	if (!lines) return [];
	const result: { time: number; text: string }[] = [];
	for (const line of lines) {
		const match = line.match(/^\[(\d+):(\d+)\.(\d+)\](.*)/);
		if (!match) continue;
		const minutes = parseInt(match[1]);
		const seconds = parseInt(match[2]);
		let millis = parseInt(match[3]);
		if (match[3].length === 2) millis *= 10;
		const time = minutes * 60000 + seconds * 1000 + millis;
		result.push({ time, text: match[4].trim() });
	}
	return result;
}

let lineMapBuilt = false;
function wrapAndInject() {
	if (lineMapBuilt) return;
	const container = document.querySelector('[data-lyrics-container="true"]');
	if (!container) return;
	const p = container.querySelector("p");
	if (!p) return;
	const map = new Map<number, HTMLElement>();
	const nodes = Array.from(p.childNodes);
	let currentRun: Node[] = [];
	const runs: Node[][] = [];
	for (const node of nodes) {
		if (node instanceof HTMLElement && node.tagName === "BR") {
			runs.push(currentRun);
			currentRun = [];
		} else {
			currentRun.push(node);
		}
	}
	runs.push(currentRun);
	const spans: HTMLElement[] = [];
	for (const run of runs) {
		if (run.length === 0) continue;
		const span = document.createElement("span");
		span.className = "synced-line";
		const parent = run[0].parentNode!;
		parent.insertBefore(span, run[0]);
		for (const node of run) {
			span.appendChild(node);
		}
		spans.push(span);
	}
	const synced = syncedLines.value;
	const used = new Set<number>();
	let scanStart = 0;

	for (let syncedIdx = 0; syncedIdx < synced.length; syncedIdx++) {
		if (scanStart >= spans.length) break;
		const syncedText = synced[syncedIdx].text.toLowerCase().trim();
		if (!syncedText) continue;

		let bestScore = 0;
		let bestIdx = -1;

		for (let j = scanStart; j < spans.length; j++) {
			if (used.has(j)) continue;
			const domText = spans[j].textContent?.trim()?.toLowerCase() || "";
			if (!domText) continue;

			if (domText.includes(syncedText) || syncedText.includes(domText)) {
				bestScore = 1;
				bestIdx = j;
				break;
			}
			const score = similarity(syncedText, domText);
			if (score > bestScore) {
				bestScore = score;
				bestIdx = j;
			}
		}

		if (bestScore > 0.3 && bestIdx >= 0) {
			map.set(syncedIdx, spans[bestIdx]);
			used.add(bestIdx);
			if (bestIdx === scanStart) {
				while (used.has(scanStart)) scanStart++;
			}
		}
	}
	lineMap.value = map;
	lineMapBuilt = true;
}

function highlightLine(idx: number) {
	document.querySelectorAll(".synced-line.current-line").forEach((el) => el.classList.remove("current-line"));
	const el = lineMap.value.get(idx);
	if (el) el.classList.add("current-line");
}
watch(currentLineIndex, (idx) => {
	if (idx < 0) return;
	highlightLine(idx);
});
function init(data: CustomEvent<{ name: string; artists: Array<string>; image: string; appleMusicID: string; lyrics: Array<any> }>) {
	console.vLog("display", data);
	display.value = true;
	songName.value = data.detail.name;
	songArtists.value = data.detail.artists.join(", ");
	songCover.value = data.detail.image;

	lyrics = data.detail.lyrics[0].children;

	appleMusicID = data.detail.appleMusicID;

	itunesArtists = data.detail.artists.join(" ");
	lrclibArtist = data.detail.artists[0];
	spotifyArtists = data.detail.artists.map((artist) => `artist:${artist.trim()}`).join(" ");
}
onMounted(() => {
	if (unsafeWindow.Spotify) {
		//initPlayer();
	} else {
		window.addEventListener(
			"lyeh:spotify:ready",
			() => {
				isReady.value = true;
			},
			{ once: true },
		);
		window.addEventListener("lyeh:spotify:display", init as EventListener, { once: true });
	}
});

onBeforeUnmount(() => {
	window.removeEventListener("lyeh:spotify:ready", initPlayer);
	if (player) {
		player.disconnect();
	}
});

// skidded from D-Security. Idk where it came from
function similarity(s1: string, s2: string) {
	let longer = s1;
	let shorter = s2;
	if (s1.length < s2.length) {
		longer = s2;
		shorter = s1;
	}
	const longerLength = longer.length;
	if (longerLength == 0) {
		return 1.0;
	}
	return (longerLength - editDistance(longer, shorter)) / longerLength;
}
function editDistance(s1: string, s2: string) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	const costs = new Array();
	for (let i = 0; i <= s1.length; i++) {
		let lastValue = i;
		for (let j = 0; j <= s2.length; j++) {
			if (i == 0) {
				costs[j] = j;
			} else if (j > 0) {
				let newValue = costs[j - 1];
				if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
					newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
				}
				costs[j - 1] = lastValue;
				lastValue = newValue;
			}
		}
		if (i > 0) costs[s2.length] = lastValue;
	}
	return costs[s2.length];
}
</script>
