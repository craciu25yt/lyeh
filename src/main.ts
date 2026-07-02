import "./styles/!theme.css";
import "./styles/modal.css";
import "./styles/command_pallete.css";
import "./styles/player.css";
import "./styles/song_edit.css";
import "./styles/navvar.css";
import "./styles/artist.css";
import "./styles/faq.css";
import "./styles/albums.css";
import "./styles/user.css";
import "./styles/home.css";
import "./styles/add_song.css";
import { getColorSync, getSwatches, getSwatchesSync } from "colorthief";

import { createApp } from "vue";
import App from "./app.vue";
//@ts-ignore
import { GM_xmlhttpRequest, GM_getValue, GM_setValue, GM_info, unsafeWindow } from "$";

// Grab the raw function pointer at the absolute top-level module scope
const privilegedFetch = GM_xmlhttpRequest;
const debug = true;
const banners = new Map<string, string>();
const covers = new Map<string, string>();
const coverAccent = new Map<string, Promise<any>>();
const progressBarRegex = /linear-gradient\(to right,\s*[^)]+\)\s*([\d.]+%)/;

import { settingsSchema } from "./components/settings";
// lil skid. I love u genius devs don't sue me <3
const COOKIE_NAME = "_genius_release_opt_in_add_song";
const MAX_AGE = 60 * 60 * 24 * 60;

let state = "injecting";
class Genie {
	constructor() {
		this.init();
	}

	private init() {
		console.realLog = console.log;
		let geniusLogger = console.realLog;
		Object.defineProperty(console, "log", {
			get: () => {
				const css =
					"background-color: rgba(250, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				return console.realLog.bind(console, "%cLyeh", css);
			},
			set: (newValue) => {
				geniusLogger = newValue;
			},
		});

		Object.defineProperty(console, "vLog", {
			get: () => {
				const vue =
					"background-color: #42b883; color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				const lyeh =
					"background-color: rgba(250, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				return console.realLog.bind(console, "%cLyeh%c %cVue", lyeh, "", vue);
			},
		});

		console.log("Launching 🚀!");
		state = "launching";
		window.addEventListener("error", (err) => {
			console.log("error unu", document.readyState);
			if (document.readyState == "loading") {
				window.addEventListener("DOMContentLoaded", () => {
					this.mountVue();

					window.dispatchEvent(
						new CustomEvent("lyeh:error", {
							detail: { err, state },
						}),
					);
				});
			} else {
				window.dispatchEvent(
					new CustomEvent("lyeh:error", {
						detail: { err, state },
					}),
				);
			}
		});

		// find a way to optimize apple's injection
		//if (window.top !== window.self) {
		//	console.log("iframe detected, exitting out");
		//	if (document.readyState == "loading") {
		//		window.addEventListener("DOMContentLoaded", () => {
		//			return;
		//		});
		//	} else {
		//		return;
		//	}
		//}
		console.log("Loading settings...");
		for (const category of settingsSchema) {
			for (const setting of category.items) {
				console.log(setting);
				const value = GM_getValue(`lyeh:settings:${setting.id}`);
				console.log(`--settings-${setting.id}`);
				document.documentElement.style.setProperty(
					`--settings-${setting.id}`,
					value ? JSON.parse(value) : setting.default,
				);
			}
		}
		console.log("Settings loaded!");

		document.documentElement.dataset.lyehTheme = "dark";

		const url = new URL(window.location.href);
		if (url.pathname.startsWith("/artists/")) {
			if (url.searchParams.get("react") != "1") {
				url.searchParams.set("react", "1");
				window.location.replace(url.toString());
			}
			this.mouseEvents();
		}
		//todo: investigate enforce via cookie
		if (url.pathname.startsWith("/album/")) {
			if (url.searchParams.get("react") != "1") {
				url.searchParams.set("react", "1");
				window.location.replace(url.toString());
			}
			this.mouseEvents();
		}
		if (url.pathname.startsWith("/new")) {
			console.log("al vacio", document.cookie);
			const cookieExists = new RegExp(COOKIE_NAME).test(document.cookie);
			if (!cookieExists) {
				document.cookie = `${COOKIE_NAME}=1; path=/; max-age=${MAX_AGE}; Secure; SameSite=Lax`;
			}
		}

		if (document.readyState === "loading") {
			window.addEventListener("DOMContentLoaded", () => this.startup());
		} else {
			this.startup();
		}
		if (debug) {
			window.addEventListener("keypress", (event) => {
				console.log(event.ctrlKey, event.key);
				if (event.ctrlKey && event.key == "\x02") {
					debugger;
				}
			});
		}
		const originalFetch = window.fetch;
		window.fetch = function (...args) {
			const response = originalFetch.apply(this, args);
			const url = args[0];

			//if (typeof url === "string" && url.includes("/api/artists/")) {
			//	console.log("intercepting");
			//	// Extract the artist ID synchronously from the URL string right away
			//	// Example: /api/artists/463998 -> matches[1] = "463998"
			//	const match = url.match(/\/api\/artists\/(\d+)/);
			//	if (match && match[1]) {
			//		lastFetchedArtistId = match[1];
			//	}
			//}
			if (typeof url === "string" && url.includes("/api/inboxes/main_activity_inbox/line_items/")) {
			}
			//console.log(response);
			return response;
		};
		state = "pre-starting";
	}
	private isMounted = false;
	private mountVue() {
		if (this.isMounted) return;

		let container = document.getElementById("lyeh");
		if (!container) {
			container = document.createElement("div");
			container.id = "lyeh";
			document.body.appendChild(container);
			createApp(App).mount(container);
		}
	}
	private observeDOM() {
		const observer = new MutationObserver(async (mutations) => {
			// const img = document.querySelector('[class*="SizedImage__Image"]') as HTMLImageElement;
			// console.log(img);
			// if (img && img.src) {
			// 	observer.disconnect();
			// 	console.log("IMAGEEEEEEEEEEEEE", img);

			// 	// Use Violentmonkey's privileged context to bypass CORS
			// 	privilegedFetch({
			// 		method: "GET",
			// 		url: img.src,
			// 		responseType: "blob",
			// 		onload: (response: GM_xmlhttpRequest) => {
			// 			// Create a local object URL from the raw blob data
			// 			const blobUrl = URL.createObjectURL(response.response);

			// 			// Create an off-screen image element to parse the color
			// 			const tempImg = new Image();
			// 			tempImg.onload = () => {
			// 				const color = this.getAccent(tempImg);
			// 				const baseColor = color.Vibrant?.color ?? color.LightVibrant?.color;
			// 				document.documentElement.style.setProperty("--lyeh-current-song-accent", baseColor!.css());
			// 				const hsl = baseColor!.hsl();
			// 				const h = hsl.h;
			// 				const s = hsl.s;
			// 				const l = hsl.l;

			// 				document.documentElement.style.setProperty(
			// 					"--lyeh-current-song-accent-secondary",
			// 					`hsl(${h}, ${s}%, ${Math.max(0, l - 20)}%)`,
			// 				);

			// 				// Clean up memory
			// 				URL.revokeObjectURL(blobUrl);
			// 			};
			// 			tempImg.src = blobUrl;
			// 		},
			// 		onerror: (err: Error) => {
			// 			console.error("Failed to fetch image via GM_xmlhttpRequest", err);
			// 		},
			// 	});
			// }
			for (const mutation of mutations) {
				for (const node of mutation.addedNodes) {
					if (!(node instanceof HTMLElement)) continue;

					const menu = node.matches(`[class^="styleAnchors__PageHeaderDropdownMenu"]`);
					if (menu) {
						const placeholder = document.createElement("button");
						placeholder.className = "PageHeaderMenu__Title-sc-jiji PageHeaderMenu__Item-sc-holi gzRYgj";
						placeholder.style.padding = "0.75 rem";
						placeholder.innerText = "Lyeh Settings";
						placeholder.onclick = () => {
							window.dispatchEvent(new CustomEvent("lyeh:settings"));
						};

						// last = sign out
						node.insertBefore(placeholder, node.lastElementChild);
					}

					const navvar = document.querySelector(`[class^="StickyNav-desktop__Container"]`);
					if (navvar) {
						document.documentElement.style.setProperty(
							"--current-accent",
							window.getComputedStyle(navvar).backgroundColor,
						);
					}
					const referents = node.querySelectorAll(`[class^="Referent__FragmentContainer"]`);
					if (referents.length != 0) {
						for (const elem of referents) {
						}
					}
					if (node.matches(`[class^="styleAnchors__PageHeaderDropdownMenu"]`)) {
						const targets = node.querySelectorAll('[class^="LineItem__ItemRow"]');
						for (const target of targets) {
							target.parentElement!.classList.add("lyeh__ItemParent");
						}
					}
					if (node.querySelector(`[class^="LineItem__ItemRow"]`)) {
						node.classList.add("lyeh__ItemParent");
						console.log("lirico en la casa");
					}
					if (node.matches('[class^="PortalTooltip__Content"]')) {
						let artistLink = node.querySelector(`a[class^="ArtistTooltip__ArtistBadge"]`);
						if (!artistLink) {
							artistLink = node.querySelector(`a[class^="UserBadge__Container"]`);
							if (!artistLink) {
								console.warn("[Genie] Failed to scrap the autor href");
								continue;
							}
						}

						const bannerUrl = banners.get(artistLink.href);
						if (bannerUrl) {
							node.style.setProperty("--artist-banner-url", `url(${bannerUrl})`);
						}
						continue;
					}
					if (node.matches(`[class^="Modal-shared__ModalSharedContainer"`)) {
						const progressBars = document.querySelectorAll<HTMLElement>(
							`li[class*="ContributorList__ListItem"]`,
						);
						for (const progress of progressBars) {
							const Class = progress.className.split(" ")[1];
							if (!Class) {
								console.warn("xd?");
								continue;
							}
							const barElem = node.getElementsByClassName(Class)[0];
							console.log(barElem, barElem.style);
							const regex = barElem.style.background.match(progressBarRegex);
							console.log("jeje", regex, progress);
							if (!regex) continue;
							barElem.style.background = `linear-gradient(to right, white ${regex[0]}, transparent 0px)`;
						}
					}

					if (node.querySelector('[class*="SongHeader"]')) {
						this.transformHeader(node);
					}
				}
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });
	}
	private startup() {
		state = "starting";

		this.observeDOM();
		this.extractSongData();

		this.mountVue();

		const cacheVersion = GM_getValue("lyeh:version");
		const version = GM_info.script.version;

		console.log("VERSIOOON", version, cacheVersion);
		if (!cacheVersion) {
			GM_setValue("lyeh:version", version);
		} else {
			const cacheParts = cacheVersion.split(".");
			const cacheMajor = cacheParts[0];
			const cacheMinor = cacheParts[1];
			const cachePath = cacheParts[2];

			const versionParts = version.split(".");
			const major = versionParts[0];
			const minor = versionParts[1];
			const path = versionParts[2];
			console.log(cacheMajor, major);

			// todo: big (now's) noti for major, small noti like windows on minor/path. Also show what changed
			if (cacheMajor != major) {
				console.log("version missmatch");
				window.dispatchEvent(
					new CustomEvent("lyeh:version-mismatch", {
						detail: { oldVersion: cacheVersion, newVersion: version },
					}),
				);
				GM_setValue("lyeh:version", version);
			}
			if (cacheMinor != minor) {
				console.log("version missmatch");
				window.dispatchEvent(
					new CustomEvent("lyeh:version-mismatch", {
						detail: { oldVersion: cacheVersion, newVersion: version },
					}),
				);
				GM_setValue("lyeh:version", version);
			}
			if (cachePath != path) {
				console.log("version missmatch");
				window.dispatchEvent(
					new CustomEvent("lyeh:version-mismatch", {
						detail: { oldVersion: cacheVersion, newVersion: version },
					}),
				);
				GM_setValue("lyeh:version", version);
			}
		}
		state = "running";
	}
	private transformHeader(headerElement: HTMLElement) {
		// Add custom Bleh classes instead of breaking React structure
		headerElement.classList.add("bleh-custom-header");
	}

	private extractSongData() {
		const trackingData = (window as any).__PRELOADED_STATE__ || null;
		if (trackingData) {
			console.log("Genius Metadata captured:", trackingData);
			for (const [_, data] of Object.entries(trackingData.entities.artists || {}) as [string, any]) {
				if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
			}
			for (const [_, data] of Object.entries(trackingData.entities.user || {}) as [string, any]) {
				if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
			}
			for (const [_, data] of Object.entries(trackingData.entities.songs || {}) as [string, any]) {
				/* lets work with 300x300 instead of 1000x1000 */
				if (data.songArtImageThumbnailUrl) {
					covers.set(data.url, data.songArtImageThumbnailUrl);
					coverAccent.set(data.url, this.getAccentCache(data.url, data.songArtImageThumbnailUrl));
				}
			}

			for (const [_, data] of Object.entries(trackingData.entities.albums || {}) as [string, any]) {
				if (data.coverArtThumbnailUrl) {
					coverAccent.set(data.url, this.getAccentCache(data.url, data.coverArtThumbnailUrl));
				}
			}
		}
	}
	private getAccent(img: HTMLImageElement) {
		console.log("running accent");
		const color = getSwatchesSync(img);
		console.log("color", color);
		return color;
	}

	private async getAccentCache(songUrl: string, imgUrl: string): Promise<any> {
		console.log("running accent async");
		const cacheKey = `accent:${songUrl}`;
		const cached = await GM_getValue(cacheKey, null);
		if (cached) {
			console.log("CACHE HIT!!");
			return JSON.parse(cached);
		}

		console.log(`[Genie] Cache miss ${songUrl}`);
		return new Promise((resolve, reject) => {
			privilegedFetch({
				method: "GET",
				url: imgUrl,
				responseType: "blob",
				onload: (response: GM_xmlhttpRequest) => {
					const blobUrl = URL.createObjectURL(response.response);
					const tempImg = new Image();
					tempImg.onload = async () => {
						try {
							const swatches = await getSwatches(tempImg);

							await GM_setValue(cacheKey, JSON.stringify(swatches));
							URL.revokeObjectURL(blobUrl);
							resolve(swatches);
						} catch (err) {
							URL.revokeObjectURL(blobUrl);
							reject(err);
						}
					};
					tempImg.onerror = () => {
						URL.revokeObjectURL(blobUrl);
						reject(new Error("Failed to load blob into Image element."));
					};

					tempImg.src = blobUrl;
				},
				onerror: (err: Error) => {
					reject(err);
					resolve(null);
				},
			});
		});
	}
	private mouseEvents() {
		document.addEventListener("mouseover", async (e) => {
			if (!e || !e.target) return;
			const songAnchor = (e.target as Element).closest(
				'a[class^="DiscographyItem__Container"]',
			) as HTMLAnchorElement; // I really fucking hate typescript
			if (songAnchor) {
				console.log(songAnchor);
				const songUrl = songAnchor.href;
				const swatches = await coverAccent.get(songUrl);
				const activeSwatch =
					swatches.Vibrant ||
					swatches.DarkVibrant ||
					swatches.LightVibrant ||
					swatches.Muted ||
					swatches.DarkMuted ||
					swatches.LightMuted;

				if (activeSwatch) {
					const { l, c, h } = activeSwatch.color._oklch;
					const accentColor = `oklch(${l} ${c} ${h})`;

					document.documentElement.style.setProperty("--current-accent", accentColor);

					document.documentElement.style.setProperty(
						"--lyeh-bg-primary",
						`color-mix(in oklch, ${accentColor} 15%, #292424)`,
					);
				}
			}
		});

		// 2. Mouse Leave Delegation
		document.addEventListener("mouseout", (e) => {
			const songAnchor = e.target.closest('a[class^="DiscographyItem__Container"]');

			if (songAnchor) {
				document.documentElement.style.setProperty("--current-accent", "rgb(255, 255, 100)");
				document.documentElement.style.setProperty("--lyeh-bg-primary", "#292424");
			}
		});
	}
}

new Genie();

declare global {
	interface Console {
		realLog(...content: any[]): void;
		vLog(...content: any[]): void;
	}
}
