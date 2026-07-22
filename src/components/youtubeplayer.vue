<template>
	<div v-if="display" class="yt-container">
		<div class="yt-player">
			<div class="cover-wrapper">
				<img class="player-cover" :src="songCover" alt="" />
			</div>
			<div class="yt-metadata">
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
				<input type="range" class="progress-slider" min="0" :max="duration" :value="position" @input="(e) => seek(Number((e.target as HTMLInputElement).value))" />
				<span class="time-text">{{ formatTime(duration) }}</span>
			</div>

			<svg class="logo-wrapper" viewBox="30 1 65 20" width="95" height="60" fill="currentColor">
				<path
					d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"
				></path>
				<path
					d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"
				></path>
				<path
					d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"
				></path>
				<path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
				<path
					d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"
				></path>
				<path
					d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"
				></path>
				<path
					d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"
				></path>
			</svg>
		</div>
		<div ref="youtubeContainer" class="youtube-player-inner"></div>
	</div>
</template>

<style scoped>
.yt-container {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 20px;
	z-index: 5;

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
.yt-player {
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

.yt-metadata {
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
	text-overflow: ellipsis;
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
.progress-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #ffffff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	transition: transform 0.1s ease;
}

.youtube-player-inner {
	position: absolute;
	width: 0;
	height: 0;
	visibility: hidden;
}
</style>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

//@ts-ignore
import { GM_getValue, GM_setValue, GM_xmlhttpRequest, unsafeWindow } from "$";

const display = ref(false);
const isReady = ref(false);
const isPlaying = ref(false);

const songName = ref("");
const songArtists = ref("");
const songCover = ref("");

let artists: Array<string> | null = null;
let youtubeUrl: string | null = null;

let lyrics: Array<object | string> | null = null;
let lrclibArtist: string | null = null;
let appleMusicID: string | null = null;

const position = ref(0);
const duration = ref(0);
let player: any = null;
let positionInterval: number | null = null;

const syncedLines = ref<{ time: number; text: string }[]>([]);
const lineMap = ref(new Map<number, HTMLElement[]>());
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

const youtubeContainer = ref<HTMLElement | null>(null);
// intelligent search > genius link, as might contain videoclip sounds and mess with me
//let youtubeUrl: string | null = null;

function searchYouTube(query: string, relax: boolean = false): Promise<string | null> {
	return new Promise((resolve) => {
		GM_xmlhttpRequest({
			method: "GET",
			url: `https://music.youtube.com/search?q=${encodeURIComponent(query)}`,
			headers: {
				Cookie: "CONSENT=YES+cb",
				"User-Agent": navigator.userAgent,
				"Accept-Language": "en-US,en;q=0.9",
			},
			onload: (res: GM_xmlhttpRequest) => {
				try {
					const html = res.responseText;
					const entryMatches = html.match(/initialData\.push\(([\s\S]*?)\);/g);

					for (const entry of entryMatches) {
						if (entry.includes("music_search_catalog") || entry.includes("searchEndpoint")) {
							const innerObjText = entry.replace(/^initialData\.push\(/, "").replace(/\);$/, "");

							try {
								// lost between 30m and 1h trying to just parse it into a fucking js object
								const object = new Function(`return ${innerObjText};`)();
								const data = JSON.parse(object.data);
								let videoID = null;

								let i = 0;
								// I think youtube likes nesting
								for (const entry of data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents) {
									i++;
									if (i > 5) {
										console.yLog("no song was found");
										break;
									}
									// info badge
									if (entry.itemSectionRenderer?.contents[0]?.messageRenderer) continue;
									// ts has me crying btw 😭
									if (entry.musicCardShelfRenderer) {
										const watchEndpoint = entry.musicCardShelfRenderer.title.runs[0].navigationEndpoint.watchEndpoint;
										const type = watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType;
										if (!relax && type != "MUSIC_VIDEO_TYPE_ATV") continue;
										videoID = watchEndpoint.videoId;
										break;
									}

									if (entry.itemSectionRenderer) {
										if (entry.itemSectionRenderer.contents[0].didYouMeanRenderer) continue;
										const watchEndpoint =
											entry.itemSectionRenderer.contents[0].musicResponsiveListItemRenderer.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer
												.playNavigationEndpoint.watchEndpoint;
										const type = watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType;

										if (!relax && type != "MUSIC_VIDEO_TYPE_ATV") continue;
										videoID = watchEndpoint.videoId;
										break;
									}
								}
								return resolve(videoID);
							} catch (e) {
								console.yLog(e);
								continue;
							}
						}
					}
				} catch (error) {
					console.error("[lyeh] Error parsing YouTube Music backend payload:", error);
				}
				resolve(null);
			},
			onerror: () => resolve(null),
		});
	});
}

function onPlayerStateChange(event: { data: number }) {
	if (event.data === 1) {
		isPlaying.value = true;
		duration.value = player!.getDuration() * 1000;
		startPositionTracking();
	} else if (event.data === 2) {
		isPlaying.value = false;
		stopPositionTracking();
	} else if (event.data === 0) {
		isPlaying.value = false;
		stopPositionTracking();
		position.value = duration.value;
	}
}

function onPlayerError(event: any) {
	console.error("YouTube player error:", event.data);
}

function startPositionTracking() {
	stopPositionTracking();
	positionInterval = window.setInterval(() => {
		if (player && player.getCurrentTime) {
			position.value = player.getCurrentTime() * 1000;
		}
	}, 100);
}

function stopPositionTracking() {
	if (positionInterval !== null) {
		clearInterval(positionInterval);
		positionInterval = null;
	}
}

function b64(str: string) {
	const bytes = new TextEncoder().encode(str);
  return btoa(String.fromCodePoint(...bytes));
}
async function initPlayer() {
	if (!youtubeContainer.value) return;

	let query = `"${songName.value} ${songArtists.value}"`;
	let videoId
	const cache = GM_getValue(`cache:youtube:${b64(query)}`)
	if (cache) {
		console.yLog("Cached YouTube ID for:", query);

		videoId = cache
	} else {
		console.yLog("Searching YouTube Music for:", query);
		videoId = await searchYouTube(query);
	}
	if (!videoId) {
		console.yLog("No video found");

		const cleanName = songName.value.replace(/[^A-Za-z0-9\s]/g, "");
		const cleanArtists = songArtists.value.replace(/[^A-Za-z0-9\s]/g, "");

		query = `"${cleanName}" ${cleanArtists}`;
		console.yLog("Executing a relaxed search:", query);
		videoId = await searchYouTube(query, true);

		if (!videoId && artists!.length > 1) {
			console.yLog("Relaxed search missed 😭");
			console.yLog("Executing last try as:", query);

			// Don't do like gims seya pls
			const cleanFirstArtist = artists![0].replace(/[^A-Za-z\s]/g, "");
			query = `"${cleanName}" ${cleanFirstArtist}`;

			videoId = await searchYouTube(query, true);
		}
		if (!videoId && youtubeUrl) {
			console.yLog("Relaxed search missed 😭");
			console.yLog("Adding fallback video from genius");
			videoId = extractVideoID(youtubeUrl!);
		}

		if (!videoId) {
			console.yLog("No luck buddy. Sorry 🙏");
			return;
		}
	}
	if (!cache) {
		GM_setValue(`cache:youtube:${b64(`"${songName.value} ${songArtists.value}"`)}`, videoId)
	}
	console.yLog("Found a candidate:", videoId);

	const YT = (unsafeWindow as any).YT;
	if (!YT || !YT.Player) {
		console.yLog("YouTube IFrame API not loaded yet. Please try again.");
		return;
	}

	player = new YT.Player(youtubeContainer.value, {
		height: "0",
		width: "0",
		videoId: videoId,
		playerVars: {
			autoplay: 1,
			controls: 0,
			disablekb: 1,
			iv_load_policy: 3,
			modestbranding: 1,
			playsinline: 1,
			rel: 0,
			showinfo: 0,
		},
		events: {
			onStateChange: onPlayerStateChange,
			onError: onPlayerError,
			onReady: () => {
				isReady.value = true;
				player!.playVideo();
				afterPlayStart();
			},
		},
	});
}
// sad ahh helper
function extractVideoID(url: string) {
	const parsed = new URL(url.replace(/\/+$/, ""));
	return parsed.searchParams.get("v");
}

// remasters, remix etc might not have lyrics, so fallback
// (all this cuz Olvídame btw)
function cleanSong(name: string) {
	return name.replace(" ", "+").replace(/\(.*\)/, "");
}
async function afterPlayStart() {
	const cache = GM_getValue(`cache:lyrics:${appleMusicID}`);
	let lrclibReq: Promise<Response> | null = null;
	let syncedLyrics;

	if (!cache) {
		console.yLog(`Querying for lyrics: ${songName.value.replace(" ", "+")}+${artists!.join("+")}`);

		lrclibReq = fetch(`https://lrclib.net/api/search?q=${songName.value.replace(" ", "+")}+${artists!.join("+")}`);
	} else {
		syncedLyrics = cache;
	}

	if (lrclibReq) {
		const response = await lrclibReq;
		let data = await response.json();

		if (data.length == 0) {
			console.yLog(`First lyrics search missed. Last attempt as: ${cleanSong(songName.value)}+${artists!.join("+")}`);

			const retryRes = await fetch(`https://lrclib.net/api/search?q=${cleanSong(songName.value)}+${artists!.join("+")}`);
			data = await retryRes.json();

			if (data.length == 0) {
				console.yLog("No lyrics was found for this song :(");
				return;
			}
		}
		let lyrics: string = "";
		console.log(data);
		for (const song of data) {
			if (!song.syncedLyrics) continue;
			syncedLyrics = song.syncedLyrics;
			console.log(syncedLyrics);
			break;
		}

		GM_setValue(`cache:lyrics:${appleMusicID}`, syncedLyrics);
	}
	if (syncedLyrics == "") {
		console.yLog("No lyrics was found for this song :(");
		return;
	}
	if (syncedLyrics) {
		syncedLyrics = syncedLyrics.split("\n") || null;
	}
	if (!syncedLyrics) {
		console.yLog("No song lyrics found!");
	}
	console.log(syncedLines.value);
	syncedLines.value = parseSyncedLyrics(syncedLyrics);
	console.log(syncedLines.value);
	wrapAndInject();
	isReady.value = true;
}

const formatTime = (ms: number | undefined) => {
	if (!ms) return "0:00";

	const totalSeconds = Math.floor(ms / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function togglePlayback() {
	if (!player) {
		initPlayer();
		return;
	}
	const state = player.getPlayerState();
	if (state === 1) {
		player.pauseVideo();
	} else {
		player.playVideo();
	}
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

	player.seekTo(value / 1000, true);
	position.value = value;
}

watch(isPlaying, (playing) => {
	if (playing) {
		startPositionTracking();
	} else {
		stopPositionTracking();
	}
});

function parseSyncedLyrics(lines: string[] | null): { time: number; text: string }[] {
	if (!lines) return [];
	const result: { time: number; text: string }[] = [];
	for (const line of lines) {
		console.log(line);
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

const nativeRemoveChild = Node.prototype.removeChild;
//@ts-ignore
Node.prototype.removeChild = function (child) {
  if (child && child.parentNode !== this) {
	  const actualParent = child.parentNode;
    //@ts-ignore
    if (actualParent && actualParent.classList?.contains('synced-line')) {
      return nativeRemoveChild.call(actualParent, child);
    }
    if (this.contains(child)) {
      return nativeRemoveChild.call(this, child);
    }
    return child;
  }
  return nativeRemoveChild.call(this, child);
};


const nativeReplaceChild = Node.prototype.replaceChild;
//@ts-ignore
Node.prototype.replaceChild = function (newChild, oldChild) {
  if (oldChild && oldChild.parentNode !== this) {
	  const actualParent = oldChild.parentNode;
    //@ts-ignore
    if (actualParent && actualParent.classList?.contains('synced-line')) {
      return nativeReplaceChild.call(actualParent, newChild, oldChild);
    }
    return oldChild;
  }
  return nativeReplaceChild.call(this, newChild, oldChild);
};

// rn I'm so tried and my brain isn't capable to do this by itself so this whole thing is vibecoded
let lineMapBuilt = false;
function wrapAndInject() {
	if (lineMapBuilt) return;
	const container = document.querySelector('[data-lyrics-container="true"]');
	if (!container) return;
	const p = container.querySelector("p");
	if (!p) return;

	// Update Map to hold arrays of elements
	const map = new Map<number, HTMLElement[]>();
	let currentRun: Node[] = [];
	const runs: Node[][] = [];

	function collectRuns(parent: Node) {
		for (const node of Array.from(parent.childNodes)) {
			if (node instanceof HTMLElement && node.tagName === "BR") {
				if (currentRun.length > 0) {
					runs.push(currentRun);
					currentRun = [];
				}
			} else if (node instanceof HTMLElement && node.querySelector('br')) {
				collectRuns(node);
			} else {
				currentRun.push(node);
			}
		}
	}
	collectRuns(p);
	if (currentRun.length > 0) runs.push(currentRun);

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
	let currentSpanIdx = 0; // Track our position in the Genius DOM

	// INVERTED LOOP: Iterate over LRCLib synced lines instead of DOM spans
	for (let k = 0; k < synced.length; k++) {
		const syncedText = synced[k].text.toLowerCase().trim();
		if (!syncedText) continue;

		// compact: removes all spaces/punctuation for strict substring matching (bypasses missing <br> spaces)
		const compactSynced = syncedText.replace(/[^a-z0-9\u00c0-\u024f]/gi, "");
		// norm: keeps spaces for word boundary / overlap checks
		const normSynced = syncedText.replace(/[^\w\s\u00c0-\u024f]/gi, "");

		const matchedSpans: HTMLElement[] = [];
		let highestScore = 0;
		let bestSingleSpanIdx = -1;

		// Sliding window: Look ahead in the DOM from our current position
		const searchStart = Math.max(0, currentSpanIdx);
		const searchEnd = Math.min(searchStart + 6, spans.length);

		for (let j = searchStart; j < searchEnd; j++) {
			const domText = spans[j].textContent?.trim()?.toLowerCase() || "";
			if (!domText || domText.startsWith("[")) continue;

			const compactDom = domText.replace(/[^a-z0-9\u00c0-\u024f]/gi, "");
			const normDom = domText.replace(/[^\w\s\u00c0-\u024f]/gi, "");

			// CASE 1: Synced line spans MULTIPLE DOM spans (Genius split it up)
			if (compactSynced.includes(compactDom) && compactDom.length > 4) {
				matchedSpans.push(spans[j]);
				currentSpanIdx = j; // Advance pointer safely
				continue; // Don't break, see if the next DOM span is ALSO included
			}

			// CASE 2: DOM span contains MULTIPLE Synced lines (Genius combined them)
			if (compactDom.startsWith(compactSynced) && compactSynced.length > 4) {
				if (matchedSpans.length === 0) {
					matchedSpans.push(spans[j]);
					currentSpanIdx = j;
				}
				break; // Found the container block, move to the next synced line
			}

			// CASE 3: Fuzzy Overlap for slang (e.g. "estás" vs "tá", "toy" vs "estoy")
			const syncedWords = normSynced.split(/\s+/).filter((w) => w.length >= 2);
			let matchCount = 0;
			for (const w of syncedWords) {
				if (normDom.includes(w)) matchCount++;
			}
			const overlap = syncedWords.length > 0 ? matchCount / syncedWords.length : 0;

			if (overlap > 0.6) {
				if (matchedSpans.length === 0) {
					matchedSpans.push(spans[j]);
					currentSpanIdx = j;
				}
				break;
			}

			// CASE 4: Standard edit distance fallback
			const score = similarity(normSynced, normDom);
			if (score > highestScore) {
				highestScore = score;
				bestSingleSpanIdx = j;
			}
		}

		// Commit the maps found for this specific timestamp
		if (matchedSpans.length > 0) {
			map.set(k, matchedSpans);
		} else if (highestScore > 0.4 && bestSingleSpanIdx >= 0) {
			map.set(k, [spans[bestSingleSpanIdx]]);
			currentSpanIdx = bestSingleSpanIdx;
		}
	}

	lineMap.value = map;
	lineMapBuilt = true;
}
watch(currentLineIndex, (newIdx) => {
	if (newIdx !== -1) {
		highlightLine(newIdx);
	} else {
		// Clean up highlights if tracking goes out of bounds or drops
		document.querySelectorAll(".synced-line.current-line").forEach((el) => el.classList.remove("current-line"));
	}
});
function highlightLine(idx: number) {
	document.querySelectorAll(".synced-line.current-line").forEach((el) => el.classList.remove("current-line"));

	const elements = lineMap.value.get(idx);
	if (elements) {
		elements.forEach((el) => el.classList.add("current-line"));
	}
}

function init(data: CustomEvent<{ name: string; artists: Array<string>; image: string; appleMusicID: string; youtubeUrl: string; lyrics: Array<any> }>) {
	console.vLog("display", data);
	display.value = true;
	songName.value = data.detail.name;
	songArtists.value = data.detail.artists.join(", ");
	artists = data.detail.artists;
	songCover.value = data.detail.image;

	console.log(youtubeUrl);
	youtubeUrl = data.detail.youtubeUrl;
	if (data.detail.lyrics) {

	lyrics = data.detail?.lyrics[0]?.children;
	}

	appleMusicID = data.detail.appleMusicID;

	lrclibArtist = data.detail.artists[0];
}

onMounted(() => {
	window.addEventListener("lyeh:youtube:display", init as EventListener, { once: true });
});

onBeforeUnmount(() => {
	stopPositionTracking();
	if (player) {
		player.destroy();
		player = null;
	}
});

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
