<template>
	<div class="title"><span class="lyeh-tag">Lyeh</span> Artwork Finder</div>

	<div v-if="loading" class="spinner"></div>
	<div v-if="!loading && covers.length == 0" class="not-found">No covers were found for this song</div>
	<div class="container">
		<div class="cover" v-for="cover in covers" @click="clickHandler(cover.src)">
			<img :src="cover.src" class="cover-img" alt="" />
			<div class="cover-title-wrapper">
				<p class="cover-title">{{ cover.title }}</p>
				<svg v-if="cover.provider == 'apple'" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 812 1000" height="20">
					<path
						d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
					/>
				</svg>

				<svg v-if="cover.provider === 'youtube'" class="external-icon external-icon-youtube" viewBox="0 0 28.57 20" width="23" aria-hidden="true" focusable="false">
					<path
						fill="#FF0000"
						fill-rule="evenodd"
						d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324ZM11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
					/>
				</svg>
				<svg v-if="cover.provider == 'deezer'" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="20 0 190.4 70.3">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" fill="#40ab5d" d="M155.5-25.1h42.9V0h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="255.826"
      x2="-111.943"
      y1="241.804"
      x1="-111.722"
      gradientUnits="userSpaceOnUse"
      id="a"
    >
      <stop offset="0" stop-color="#358c7b" />
      <stop offset=".526" stop-color="#33a65e" />
    </linearGradient>
    <path fill="url(#a)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 9.7h42.9v25.1h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="235.917"
      x2="-99.772"
      y1="223.628"
      x1="-123.891"
      gradientUnits="userSpaceOnUse"
      id="b"
    >
      <stop offset="0" stop-color="#222b90" />
      <stop offset="1" stop-color="#367b99" />
    </linearGradient>
    <path fill="url(#b)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 44.5h42.9v25.1h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="210.773"
      x2="-185.032"
      y1="210.773"
      x1="-208.432"
      gradientUnits="userSpaceOnUse"
      id="c"
    >
      <stop offset="0" stop-color="#f90" />
      <stop offset="1" stop-color="#ff8000" />
    </linearGradient>
    <path fill="url(#c)" fill-rule="evenodd" clip-rule="evenodd" d="M0 79.3h42.9v25.1H0z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="210.773"
      x2="-156.732"
      y1="210.773"
      x1="-180.132"
      gradientUnits="userSpaceOnUse"
      id="d"
    >
      <stop offset="0" stop-color="#ff8000" />
      <stop offset="1" stop-color="#cc1953" />
    </linearGradient>
    <path fill="url(#d)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 79.3h42.9v25.1H51.8z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="210.773"
      x2="-128.432"
      y1="210.773"
      x1="-151.832"
      gradientUnits="userSpaceOnUse"
      id="e"
    >
      <stop offset="0" stop-color="#cc1953" />
      <stop offset="1" stop-color="#241284" />
    </linearGradient>
    <path fill="url(#e)" fill-rule="evenodd" clip-rule="evenodd" d="M103.7 79.3h42.9v25.1h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="210.773"
      x2="-100.16"
      y1="210.773"
      x1="-123.56"
      gradientUnits="userSpaceOnUse"
      id="f"
    >
      <stop offset="0" stop-color="#222b90" />
      <stop offset="1" stop-color="#3559a6" />
    </linearGradient>
    <path fill="url(#f)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 79.3h42.9v25.1h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="233.464"
      x2="-127.508"
      y1="226.081"
      x1="-152.755"
      gradientUnits="userSpaceOnUse"
      id="g"
    >
      <stop offset="0" stop-color="#cc1953" />
      <stop offset="1" stop-color="#241284" />
    </linearGradient>
    <path fill="url(#g)" fill-rule="evenodd" clip-rule="evenodd" d="M103.7 44.5h42.9v25.1h-42.9z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="225.211"
      x2="-155.899"
      y1="234.334"
      x1="-180.965"
      gradientUnits="userSpaceOnUse"
      id="h"
    >
      <stop offset=".003" stop-color="#fc0" />
      <stop offset="1" stop-color="#ce1938" />
    </linearGradient>
    <path fill="url(#h)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 44.5h42.9v25.1H51.8z" />
    <linearGradient
      gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
      y2="239.791"
      x2="-158.699"
      y1="257.754"
      x1="-178.165"
      gradientUnits="userSpaceOnUse"
      id="i"
    >
      <stop offset=".003" stop-color="#ffd100" />
      <stop offset="1" stop-color="#fd5a22" />
    </linearGradient>
    <path fill="url(#i)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 9.7h42.9v25.1H51.8z" />
  </g>
				</svg>
			</div>
			<p class="cover-autors">{{ cover.autors }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

//@ts-ignore
import { GM_xmlhttpRequest } from "$";

interface Cover {
	provider: "apple" | "youtube" | "deezer";
	title: string;
	autors: string;
	date?: string;
	src: string;
}

const covers = ref<Cover[]>([]);
const loading = ref(true);

async function getCoversApple(query: string) {
	GM_xmlhttpRequest({
		method: "GET",
		// https://tidal.com/v2/client-search/?includeContributors=true&includeDidYouMean=false&includeUserPlaylists=false&limit=5&query=CARAVAGGIO+DELLAFUENTE&supportsUserData=true&types=ALBUMS%2CTRACKS%2CVIDEOS%2CPLAYLISTS%2CUPLOADS&countryCode=ES&countryCode=ES&locale=en_US&deviceType=BROWSER
		// wdym token fuck u tidal
		url: `https://itunes.apple.com/search?&limit=25&entity=album&term=${encodeURIComponent(query)}`,
		headers: {
			"User-Agent": navigator.userAgent,
			"Accept-Language": "en-US,en;q=0.9",
		},
		onload: (res: GM_xmlhttpRequest) => {
			try {
				const data = JSON.parse(res.responseText);
				console.log(data);
				for (const result of Object.values(data.results) as any) {
					const date = new Date(result.releaseDate);
					const formatted = new Intl.DateTimeFormat("en-GB", {
						day: "2-digit",
						month: "2-digit",
						year: "2-digit",
						timeZone: "UTC",
					})
						.format(date)
						.replace(/\//g, "-");

					const src = result.artworkUrl60.replace("/60x60", "/1024x1024");
					covers.value.push({
						title: result.collectionName,
						autors: result.artistName,
						date: formatted,
						provider: "apple",
						src: src,
					});
				}
			} catch (error) {
				console.error("[lyeh] Error parsing cover:", error);
			}
		},
		onerror: (err: Error) => {
			console.vLog("Failed while searching apple music covers", err);
		},
	});
}
async function getCoversDezzer(query: string) {
	GM_xmlhttpRequest({
		method: "GET",
		// https://tidal.com/v2/client-search/?includeContributors=true&includeDidYouMean=false&includeUserPlaylists=false&limit=5&query=CARAVAGGIO+DELLAFUENTE&supportsUserData=true&types=ALBUMS%2CTRACKS%2CVIDEOS%2CPLAYLISTS%2CUPLOADS&countryCode=ES&countryCode=ES&locale=en_US&deviceType=BROWSER
		// wdym token fuck u tidal
		url: `https://api.deezer.com/search/album?q=${encodeURIComponent(query)}`,
		headers: {
			"User-Agent": navigator.userAgent,
			"Accept-Language": "en-US,en;q=0.9",
		},
		onload: (res: GM_xmlhttpRequest) => {
			try {
				const data = JSON.parse(res.responseText);
				console.log("dezzer", data);
				for (const result of Object.values(data.data) as any) {
					const src = result.cover_small.replace("/56x56", "/1024x1024");
					covers.value.push({
						title: result.title,
						autors: result.artist.name,
						provider: "deezer",
						src: src,
					});
				}
			} catch (error) {
				console.error("[lyeh] Error parsing cover:", error);
			}
		},
		onerror: (err: Error) => {
			console.vLog("Failed while searching apple music covers", err);
		},
	});
}
function getCoversYouTube(query: string) {
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
							const object = new Function(`return ${innerObjText};`)();
							const data = JSON.parse(object.data);
							let coverUrl = null;

							let i = 0;
							// I think youtube likes nesting
							for (const entry of data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents) {
								i++;
								console.log(entry);
								if (i > 7) {
									break;
								}
								// info badge
								const contents = entry.itemSectionRenderer?.contents[0];
								if (contents?.messageRenderer) continue;

								if (entry.musicCardShelfRenderer) {
									const watchEndpoint = entry.musicCardShelfRenderer.title.runs[0].navigationEndpoint.watchEndpoint;
									const type = watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType;
									if (type != "MUSIC_VIDEO_TYPE_ATV") continue;
									coverUrl = watchEndpoint.videoId;
									break;
								}
								const responsiveList = contents.musicResponsiveListItemRenderer;
								if (entry.itemSectionRenderer) {
									if (contents.didYouMeanRenderer) continue;
									const watchEndpoint = responsiveList.overlay?.musicItemThumbnailOverlayRenderer?.content.musicPlayButtonRenderer.playNavigationEndpoint.watchEndpoint;
									const type = watchEndpoint?.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType;

									if (type != "MUSIC_VIDEO_TYPE_ATV") continue;
									const thumbnail = responsiveList.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails[0].url;
									coverUrl = thumbnail.replace("w60-h60", "w1024-h1024");
									covers.value.push({
										title: responsiveList.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
										autors: responsiveList.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[2].text,
										provider: "youtube",
										src: coverUrl,
									});
								}
							}
						} catch (e) {
							console.yLog(e);
							continue;
						}
					}
				}
			} catch (error) {
				console.error("[lyeh] Error parsing YouTube Music backend payload:", error);
			}
		},
		onerror: (err: Error) => {
			console.vLog("Error while fetching youtube", err);
		},
	});
}

function clickHandler(src: string) {
	const input = document.querySelector(`input[name="custom_song_art_image_url"]`);
	if (!input) {
		console.vLog("no input found??");
		return;
	}
	const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
	//@ts-ignore
	valueSetter.call(input, src);
	input.dispatchEvent(new Event("input", { bubbles: true }));
}
onMounted(() => {
	window.addEventListener("lyeh:cover", ((data: CustomEvent<{ name: string; artists: Array<string> }>) => {
		const query = `${data.detail.name} ${data.detail.artists.join(", ")}`;
		getCoversApple(query);
		getCoversDezzer(query);
		getCoversYouTube(query);
		loading.value = false;
	}) as EventListener);
});
</script>

<style scoped>
.title {
	padding-bottom: 15px;
	display: inline-flex;
	gap: 10px;
}
.cover {
	line-height: 1rem;
	padding: clamp(12px, 2vw, 24px);
	width: 100%;
	box-sizing: border-box;
}
.cover:hover {
	background-color: var(--accent-40);
	border-radius: 10px;
}
.cover-img {
	width: 200px;
	border-radius: 8px;
	user-select: none;
	-webkit-user-drag: none;
	-moz-user-select: none;
}
.container {
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	flex-wrap: wrap;
	gap: 20px 30px;
	min-height: 200px;
}
.cover-title-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cover-title-wrapper svg {
	position: relative;
}
.cover-title {
	padding-top: 5px;
	font-weight: bold;
}

.cover-autors {
	font-weight: 200;
	font-size: 0.9rem;
}

.spinner {
	position: absolute;
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
		transform: translate(-50%, 150%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, 150%) rotate(360deg);
	}
}

.not-found {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.5rem;
	width: 100%;
	text-align: center;
	justify-self: center;
}
</style>
