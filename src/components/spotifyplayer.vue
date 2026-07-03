<template>
	<div class="spotify-container">
		<div v-if="loading">Initializing Spotify Core...</div>
		<div v-else-if="!isReady">Failed to connect to Spotify device</div>

		<div v-else class="spotify-player">
			<div class="cover-wrapper">
				<img class="player-cover" :src="currentState?.track_window.current_track.album.images[0]?.url" alt="" />
			</div>
			<div class="spotify-metadata">
				<span class="song-name">{{ currentTrack?.name || "No track loaded" }}</span>
				<span class="song-artists">{{ currentTrack?.artists.map((a) => a.name).join(", ") }}</span>
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
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { GM_deleteValue, GM_deleteValues, GM_getValue, GM_getValues, GM_listValues, GM_setValue } from "$";

//@ts-ignore
const { unsafeWindow } = typeof GM !== "undefined" ? GM : { unsafeWindow: window };

const loading = ref(true);
const isReady = ref(false);
const isPlaying = ref(false);

const position = ref(0);
const currentTrack = ref<Spotify.Track | null>(null);
const currentState = ref<Spotify.PlaybackState | null>(null);
let player: Spotify.Player | null = null;

async function getValidToken() {
	const expiresAt = await GM_getValue("spotify:expiration", 0);
	let accessToken = await GM_getValue("spotify:access_token");

	if (Date.now() > expiresAt) {
		const refreshToken = await GM_getValue("spotify_refresh_token");
		if (!refreshToken) return null;

		try {
			const res = await fetch(`http://127.0.0.1:8080/refresh?refresh_token=${refreshToken}`, { method: "POST" });
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
	// Reference the Player constructor from the raw window context
	const SpotifyNamespace = unsafeWindow.Spotify;
	if (!SpotifyNamespace) return;

	const token = await getValidToken();
	if (!token) {
		loading.value = false;
		return;
	}

	player = new SpotifyNamespace.Player({
		name: "Genie",
		getOAuthToken: async (cb: any) => {
			cb(await getValidToken());
		},
		volume: 0.5,
	});
	if (!player) return;

	player.addListener("ready", async ({ device_id }) => {
		GM_setValue("spotify_device_id", device_id);
		isReady.value = true;
		loading.value = false;
		const token = await getValidToken();

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

		isReady.value = true;
		loading.value = false;
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
	if (player) player.togglePlay();
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

onMounted(() => {
	// Check if main.ts already completed execution and booted the SDK
	if (unsafeWindow.Spotify) {
		initPlayer();
	} else {
		// Otherwise, wait for the global initialization event
		window.addEventListener("lyeh:spotify:ready", initPlayer, { once: true });
	}
});

onBeforeUnmount(() => {
	window.removeEventListener("lyeh:spotify:ready", initPlayer);
	if (player) {
		player.disconnect();
	}
});
</script>
