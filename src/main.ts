import "./styles/!theme.css";
import "./styles/modal.css";
import "./styles/command_pallete.css";
import "./styles/player.css";
import "./styles/song_edit.css";
import "./styles/navbar.css";
import "./styles/artist.css";
import "./styles/faq.css";
import "./styles/albums.css";
import "./styles/user.css";
import "./styles/home.css";
import "./styles/add_song.css";
import "./styles/font.css";
import Heatmap from "./components/Heatmap.vue";

import "./styles/art_extractor.css";
import { getSwatches, getSwatchesSync } from "colorthief";

import { createApp } from "vue";
import App from "./app.vue";
import CHANGELOG from "../CHANGELOG.md?raw";
//@ts-ignore
import { GM_xmlhttpRequest, GM_getValue, GM_setValue, GM_info, unsafeWindow } from "$";

// Grab the raw function pointer at the absolute top-level module scope
const privilegedFetch = GM_xmlhttpRequest;
const debug = true;
const banners = new Map<string, string>();
const covers = new Map<string, string>();
const coverAccent = new Map<string, Promise<any>>();

let currentPage = "";
import { settingsSchema } from "./components/settings";

// lil skid. I love u genius devs don't sue me <3
const COOKIE_NAME = "_genius_release_opt_in_add_song";
const MAX_AGE = 60 * 60 * 24 * 60;

let trackingData: any;
let state = "injecting";

interface ChangelogEntry {
	title: string;
	items: string[];
}

function parseChangelog(md: string, fromVersion: string, toVersion: string): ChangelogEntry[] {
	const sectionRegex = /##\s+(.+?)\r?\n([\s\S]*?)(?=##\s+|\s*$)/g;
	const sections: { version: string; items: string[] }[] = [];
	let m;

	while ((m = sectionRegex.exec(md)) !== null) {
		const version = m[1].trim();
		const items = m[2]
			.trim()
			.split(/\r?\n/)
			.map((l) => l.replace(/^[-*]\s*/, "").trim())
			.filter(Boolean);
		sections.push({ version, items });
	}

	const fromIdx = sections.findIndex((s) => s.version === fromVersion);
	const toIdx = sections.findIndex((s) => s.version === toVersion);
	if (toIdx === -1) return [];

	const start = toIdx;
	let end: number;
	if (fromIdx !== -1) {
		end = Math.min(fromIdx - 1, sections.length - 1);
	} else {
		end = sections.length - 1;
		for (let i = toIdx; i < sections.length; i++) {
			const sv = sections[i].version;
			const pa = sv.split(".").map(Number);
			const pb = fromVersion.split(".").map(Number);
			let le = true;
			for (let j = 0; j < 3; j++) {
				if ((pa[j] || 0) > (pb[j] || 0)) {
					le = false;
					break;
				}
				if ((pa[j] || 0) < (pb[j] || 0)) {
					le = true;
					break;
				}
			}
			if (le) {
				end = i - 1;
				break;
			}
		}
	}

	const result: ChangelogEntry[] = [];
	for (let i = start; i <= end; i++) {
		result.push({ title: sections[i].version, items: sections[i].items });
	}
	return result;
}

class Genie {
	constructor() {
		this.init();
	}

	private init() {
		if (window.top != window.self) {
			if (window.location.hostname.includes("filepicker.io")) {
				console.log("filepicker.io detected, injecting css");
				import("./styles/filepickerio.css");
			}
			console.log("iframe detected, injecting config");
			this.loadConfig(document.documentElement);
			console.log("exitting");
		}

		console.realLog = console.log;
		let geniusLogger = console.realLog;
		Object.defineProperty(console, "log", {
			get: () => {
				const css =
					"background-color: rgba(255, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
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
					"background-color: rgba(255, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				return console.realLog.bind(console, "%cLyeh%c %cVue", lyeh, "", vue);
			},
		});
		Object.defineProperty(console, "yLog", {
			get: () => {
				const yt =
					"background-color: #FF5E5E; color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				const lyeh =
					"background-color: rgba(255, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				return console.realLog.bind(console, "%cLyeh%c %cYouTube", lyeh, "", yt);
			},
		});
		Object.defineProperty(console, "aLog", {
			get: () => {
				const auth =
					"background-color: #FFAA00; color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				const lyeh =
					"background-color: rgba(255, 100, 160, 0.7); color: black; font-weight: bold; padding: 1px 6px; border-radius: 4px";
				return console.realLog.bind(console, "%cLyeh%c %cAuth", lyeh, "", auth);
			},
		});

		console.log("Launching 🚀!");
		state = "launching";
		window.addEventListener("error", (err) => {
			const source = err.filename || (err.error && err.error.stack) || "";
			console.log(source);

			// scribe guy fix your thing and stop sending my data to ai pls
			if (source.includes("chrome-extension://") && !source.includes("lyeh")) return;
			if (source.includes("api.js?onload=cloudflare")) return;
			if (source.includes("assets.genius.com")) return;

			if (err.message == "Script error.") return;
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

		console.log("Loading settings...");
		this.loadConfig(document.documentElement);
		console.log("Settings loaded!");

		//document.documentElement.dataset.lyehTheme = "dark";

		const url = new URL(window.location.href);
		if (url.pathname.startsWith("/artists/")) {
			if (url.searchParams.get("react") != "1") {
				url.searchParams.set("react", "1");
				window.location.replace(url.toString());
			}
			this.mouseEvents();
		}
		//todo: investigate enforce via cookie
		if (url.pathname.startsWith("/album/") || url.pathname.startsWith("/albums/")) {
			if (url.searchParams.get("react") != "1") {
				url.searchParams.set("react", "1");
				window.location.replace(url.toString());
			}
			this.mouseEvents();
		}
		const lyricPageRegex = /^\/[^\/]+-lyrics\/?$/m;
		console.log(url.pathname);
		if (lyricPageRegex.test(url.pathname)) {
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
			window.addEventListener("keydown", (event) => {
				console.log(event.ctrlKey, event.key);
				//thanks for everything waterfox
				if (event.ctrlKey && event.key == "m") {
					debugger;
				}
			});
		}
		// const originalFetch = window.fetch;
		// window.fetch = function (...args) {
		// 	const response = originalFetch.apply(this, args);
		// 	const url = args[0];

		// 	//if (typeof url === "string" && url.includes("/api/artists/")) {
		// 	//	console.log("intercepting");
		// 	//	// Extract the artist ID synchronously from the URL string right away
		// 	//	// Example: /api/artists/463998 -> matches[1] = "463998"
		// 	//	const match = url.match(/\/api\/artists\/(\d+)/);
		// 	//	if (match && match[1]) {
		// 	//		lastFetchedArtistId = match[1];
		// 	//	}
		// 	//}
		// 	if (typeof url === "string" && url.includes("/api/inboxes/main_activity_inbox/line_items/")) {
		// 	}
		// 	//console.log(response);
		// 	return response;
		// };
		state = "pre-starting";
	}
	private isMounted = false;
	private backendBase = "https://lyeh.auchen.net";
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
	private loadConfig(root: HTMLElement | null) {
		if (!root) return;

		for (const category of settingsSchema) {
			for (const setting of category.items) {
				const value: string = GM_getValue(`lyeh:settings:${setting.id}`);
				let settingValue = value;
				if (!settingValue) {
					settingValue = setting.default;

					GM_setValue(`lyeh:settings:${setting.id}`, settingValue);
				}
				if (setting.format) {
					settingValue = setting.format.replace("$!", settingValue);
				}
				if (setting.id == "youtube") {
					if (settingValue) {
						root.style.setProperty(`--settings-youtube`, "none");
					} else {
						root.style.setProperty(`--settings-youtube`, "flex");
					}
					continue;
				}
				if (setting.id == "lyrics-spacing") {
					if (!settingValue) {
						root.classList.add("lyeh-custom-spacing");
					}
					continue;
				}
				root.style.setProperty(`--settings-${setting.id}`, settingValue);
			}
		}
	}
	private observeDOM() {
		const observer = new MutationObserver(async (mutations) => {
			for (const mutation of mutations) {
				for (const node of mutation.addedNodes) {
					if (!(node instanceof HTMLElement)) continue;
					const bioContainer = node.matches("profile-user-pane")
						? document.querySelector(`profile-user-pane > div[class^="white_container"]`)
						: null;
					if (bioContainer && !document.getElementById("lyeh-heatmap")) {
						const githubSkid = document.createElement("div");
						githubSkid.className = "white_container";
						githubSkid.id = "lyeh-heatmap"; // not sure if this is called heatmap btw

						const titleContainer = document.createElement("div"); // reuse genius tag
						titleContainer.classList = "u-horizontal_margins u-vertical_margins";
						titleContainer.style.display = "flex";
						titleContainer.style.alignItems = "center";
						titleContainer.style.gap = "8px";

						const lyehTag = document.createElement("span");
						lyehTag.textContent = "Lyeh";
						lyehTag.classList = "lyeh-tag";
						const title = document.createElement("span");
						title.textContent = "Activity";
						title.classList = "lyeh-injected-title";
						titleContainer.appendChild(lyehTag);
						titleContainer.appendChild(title);

						bioContainer.insertAdjacentElement("afterend", githubSkid);
						bioContainer.insertAdjacentElement("afterend", titleContainer);

						createApp(Heatmap).mount(githubSkid);
					}
					//console.log(document.querySelector(`[class="square_button"][ng-if="$ctrl.can_edit_profile"]`))
					const buttonContainer = node.matches(`[class^="column_layout-column_span"]`)
						? document.querySelector(`[class="square_button"][ng-if="$ctrl.can_edit_profile"]`)
						: null;
					if (buttonContainer && !document.getElementById("lyeh-customization")) {
						console.log("wiii");
						const customizeButton = document.createElement("div");
						customizeButton.className = "square_button lyeh-customize-button";
						customizeButton.textContent = "Lyeh settings";
						customizeButton.onclick = () => {
							window.dispatchEvent(new CustomEvent("lyeh:settings:user"));
						};

						buttonContainer.insertAdjacentElement("afterend", customizeButton);
					}

					const menu = node.matches(`[class^="styleAnchors__PageHeaderDropdownMenu"]`);
					if (menu && node.querySelector('a[href="/forums"]')) {
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
						document.documentElement.style.setProperty(
							"--accent-text",
							window.getComputedStyle(navvar).color,
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
								continue;
							}
							const barElem = node.getElementsByClassName(Class)[0];
							const percentageElm = barElem.querySelector(`[class^="ContributorList__AttributionValue"]`);
							barElem.style.background = `linear-gradient(to right, var(--accent-40) ${percentageElm?.innerHTML},  rgba(0, 0, 0, 0.4) 0px)`;
						}
					}
					if (node.matches(`[class^="ContributorList__List-sc"`)) {
						for (const progress of node.children) {
							const Class = progress.className.split(" ")[1];
							if (!Class) {
								continue;
							}
							const barElem = node.getElementsByClassName(Class)[0];
							const percentageElm = barElem.querySelector(`[class^="ContributorList__AttributionValue"]`);
							barElem.style.background = `linear-gradient(to right, var(--accent-40) ${percentageElm?.innerHTML},  rgba(0, 0, 0, 0.4) 0px)`;
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
	private mountYouTube() {
		console.log("mounting YouTube", trackingData.entities.songs[trackingData.songPage.song].youtubeUrl);
		window.dispatchEvent(
			new CustomEvent("lyeh:youtube:display", {
				detail: {
					name: trackingData.songPage.trackingData.Title,
					artists: trackingData.songPage.trackingData["Primary Artists"],
					image: covers.get("https://genius.com" + trackingData.songPage.path),
					appleMusicID: trackingData.entities.songs[trackingData.songPage.song].appleMusicId,
					youtubeUrl: trackingData.entities.songs[trackingData.songPage.song].youtubeUrl,
					lyrics: trackingData.songPage.lyricsData.body.children,
				},
			}),
		);

		if (typeof YT === "undefined" || !YT.Player) {
			const tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";
			tag.async = true;
			document.head.appendChild(tag);

			unsafeWindow.onYouTubeIframeAPIReady = () => {
				console.yLog("YouTube IFrame API ready.");
				window.dispatchEvent(new CustomEvent("lyeh:youtube:ready"));
			};
		} else {
			window.dispatchEvent(new CustomEvent("lyeh:youtube:ready"));
		}
	}
	private startup() {
		state = "starting";

		this.observeDOM();
		this.extractSongData();
		this.mountVue();

		const youtubeToggled = GM_getValue("lyeh:settings:youtube");
		console.log(youtubeToggled, typeof youtubeToggled);
		if (currentPage == "songPage") {
			const el = document.querySelector('div[class^="PageGrid-desktop"][class*="StickyToolbar__Container"]');
			if (el) {
				const observer = new IntersectionObserver(
					([e]) => {
						e.target.classList.toggle("is-sticky", e.intersectionRatio < 1);
					},
					{
						threshold: [1],
						rootMargin: "-55px 0px 0px 0px",
					},
				);

				observer.observe(el);
			}

			if (youtubeToggled) {
				this.mountYouTube();
			}
		}
		const url = new URL(window.location.href);
		const userRegex = /^\/[^\/-]+\/?$/;

		if (userRegex.test(url.pathname)) {
			this.loadProfileGradient();
		}

		const cacheVersion = GM_getValue("lyeh:version");
		const version = GM_info.script.version;

		if (!cacheVersion) {
			GM_setValue("lyeh:version", version);
		} else if (cacheVersion !== version) {
			const entries = parseChangelog(CHANGELOG, cacheVersion, version);
			console.log(entries);
			window.dispatchEvent(
				new CustomEvent("lyeh:version-mismatch", {
					detail: { oldVersion: cacheVersion, newVersion: version, entries },
				}),
			);
			GM_setValue("lyeh:version", version);
		}

		if (GM_getValue("lyeh:auth:access_token")) {
			console.log(this.getValidToken());
		}
		state = "running";
		// 	if (unsafeWindow.angular) {
		// 		unsafeWindow.angular.module("genius").config([
		// 			"$provide",
		// 			function ($provide) {
		// 				$provide.decorator("ngIfDirective", [
		// 					"$delegate",
		// 					function ($delegate) {
		// 						const directive = $delegate[0];
		// 						const originalCompile = directive.compile;

		// 						directive.compile = function (element, attr) {
		// 							let node = element[0];
		// 							while (node) {
		// 								if (node.classList && node.classList.contains("profile_identity_and_description")) {
		// 									attr.ngIf = "true";
		// 									break;
		// 								}
		// 								node = node.parentElement;
		// 							}
		// 							return originalCompile.apply(this, arguments);
		// 						};

		// 						return $delegate;
		// 					},
		// 				]);
		// 			},
		// 		]);
		// 	}
		// }\
	}
	private async loadProfileGradient() {
		const meta = document.querySelector('meta[property="twitter:app:url:iphone"]') as HTMLMetaElement;
		if (!meta) return;

		const userId = meta.content.replace("genius://users/", "");
		if (!userId) return;

		try {
			const resp = await fetch(`https://lyeh.auchen.net/api/user/gradient?user=${userId}`);
			if (!resp.ok) return;
			const data = await resp.json();
			if (!data.gradient) return;

			const [color1, color2] = data.gradient.split(",");
			if (color1) document.documentElement.style.setProperty("--profile-bg-primary", color1);
			if (color2) document.documentElement.style.setProperty("--profile-bg-secondary", color2);
		} catch (e) {
			console.log("Failed to load profile gradient", e);
		}
	}
	private transformHeader(headerElement: HTMLElement) {
		// Add custom Bleh classes instead of breaking React structure
		headerElement.classList.add("bleh-custom-header");
	}

	private extractSongData() {
		trackingData = (unsafeWindow as any).__PRELOADED_STATE__ || null;
		if (!trackingData) return;
		console.log("Genius Metadata captured:", trackingData);
		currentPage = trackingData.currentPage;
		for (const [_, data] of Object.entries(trackingData.entities.artists || {}) as [string, any]) {
			if (data.headerImageUrl) {
				//console.log(data.url, data.headerImageUrl);
				banners.set(data.url, data.headerImageUrl);
			}
		}
		for (const [_, data] of Object.entries(trackingData.entities.user || {}) as [string, any]) {
			if (data.headerImageUrl) {
				//console.log(data.url, data.headerImageUrl);
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

	private getAccent(img: HTMLImageElement) {
		console.log("running accent");
		const color = getSwatchesSync(img);
		console.log("color", color);
		return color;
	}

	private async getAccentCache(songUrl: string, imgUrl: string): Promise<any> {
		const cacheKey = `cache:accent:${songUrl}`;
		const cached = await GM_getValue(cacheKey, null);
		if (cached) {
			return cached;
		}

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
							const activeSwatch =
								swatches.Vibrant ||
								swatches.DarkVibrant ||
								swatches.LightVibrant ||
								swatches.Muted ||
								swatches.DarkMuted ||
								swatches.LightMuted;

							//@ts-ignore
							GM_setValue(cacheKey, activeSwatch.color._oklch);
							URL.revokeObjectURL(blobUrl);

							//@ts-ignore
							resolve(activeSwatch.color._oklch);
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

	private async getValidToken(): Promise<string | null> {
		const accessToken = GM_getValue("lyeh:auth:access_token");
		if (!accessToken) return null;

		const expiresAt = GM_getValue("lyeh:auth:expires_at");
		if (!expiresAt || Date.now() < expiresAt) return accessToken;

		const refreshToken = GM_getValue("lyeh:auth:refresh_token");
		if (!refreshToken) return null;

		return new Promise((resolve) => {
			privilegedFetch({
				method: "POST",
				url: `${this.backendBase}/api/oauth2/refresh?refresh_token=${encodeURIComponent(refreshToken)}`,
				onload: (resp: any) => {
					if (resp.status != 200) {
						console.aLog(resp.responseText, resp.status);
						return;
					}
					console.aLog("Token renewed");
					const data = JSON.parse(resp.responseText);
					GM_setValue("lyeh:auth:access_token", data.access_token);
					GM_setValue("lyeh:auth:refresh_token", data.refresh_token);
					GM_setValue("lyeh:auth:expires_at", Date.now() + data.expires_in * 1000);
					resolve(data.access_token);
				},
				onerror: () => resolve(null),
			});
		});
	}
	private mouseEvents() {
		document.addEventListener("mouseover", async (e) => {
			if (!e || !e.target) return;

			//@ts-ignore
			const link = e.target.closest('a[class^="ReferentFragment"]');
			if (link) {
				const href = link.getAttribute("href");

				document
					.querySelectorAll(`a[href="${href}"] span[class^="ReferentFragment"]`)
					.forEach((span) => span.classList.add("lyeh-linked-hover"));
			}

			const songAnchor = (e.target as Element).closest(
				'a[class^="DiscographyItem__Container"]',
			) as HTMLAnchorElement; // I really fucking hate typescript
			if (songAnchor) {
				const songUrl = songAnchor.href;
				const swatches = await coverAccent.get(songUrl);
				if (swatches) {
					const { l, c, h } = swatches;
					const accentColor = `oklch(${l} ${c} ${h})`;

					document.documentElement.style.setProperty("--current-accent", accentColor);

					document.documentElement.style.setProperty(
						"--background-main-full",
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
				document.documentElement.style.setProperty("--background-main-full", "#292424");
			}
		});
	}
}

new Genie();

declare global {
	interface Console {
		realLog(...content: any[]): void;
		vLog(...content: any[]): void;
		yLog(...content: any[]): void;
		aLog(...content: any[]): void;
	}
}

declare const unsafeWindow: Window & {
	onYouTubeIframeAPIReady?: () => void;
	YT?: any;
};
