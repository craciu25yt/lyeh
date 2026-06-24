import "./styles/!theme.css";
import "./styles/modal.css";
import "./styles/command_pallete.css";
import "./styles/player.css";
import "./styles/song_edit.css";
import "./styles/navvar.css";
import "./styles/artist.css";
import "./styles/faq.css";
import "./styles/albums.css";
import { getColorSync, getSwatches, getSwatchesSync } from "colorthief";

//@ts-ignore
import { GM_xmlhttpRequest, GM_getValue, GM_setValue } from "$";

// Grab the raw function pointer at the absolute top-level module scope
const privilegedFetch = GM_xmlhttpRequest;
const debug = true;
const banners = new Map<string, string>();
const covers = new Map<string, string>();
const coverAccent = new Map<string, Promise<any>>();
const progressBarRegex = /linear-gradient\(to right,\s*[^)]+\)\s*([\d.]+%)/;

class Genie {
	constructor() {
		this.init();
	}

	private init() {
		console.log("[Genie] Launching 🚀!");
		document.documentElement.dataset.derpTheme = "dark";

		const url = new URL(window.location.href);
		if (url.pathname.startsWith("/artists/")) {
			if (url.searchParams.get("react") != "1") {
				url.searchParams.set("react", "1");
				window.location.replace(url.toString());
			}
			this.mouseEvents();
		}

		window.addEventListener("DOMContentLoaded", () => {
			this.observeDOM();
			this.extractSongData();
		});
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
			console.log(response);
			return response;
		};
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
			// 				document.documentElement.style.setProperty("--derp-current-song-accent", baseColor!.css());
			// 				const hsl = baseColor!.hsl();
			// 				const h = hsl.h;
			// 				const s = hsl.s;
			// 				const l = hsl.l;

			// 				document.documentElement.style.setProperty(
			// 					"--derp-current-song-accent-secondary",
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
					const navvar = document.querySelector(`[class^="StickyNav-desktop__Container"]`);
					if (navvar) {
						console.log(window.getComputedStyle(navvar).backgroundColor);

						document.documentElement.style.setProperty(
							"--current-accent",
							window.getComputedStyle(navvar).backgroundColor,
						);
					}
					const referents = node.querySelectorAll(`[class^="Referent__FragmentContainer"]`);
					if (referents.length != 0) {
						for (const elem of referents) {
							console.log();
						}
					}
					if (node.matches(`[class^="styleAnchors__PageHeaderDropdownMenu"]`)) {
						const targets = node.querySelectorAll('[class^="LineItem__ItemRow"]');
						for (const target of targets) {
							target.parentElement!.classList.add("Derp__ItemParent");
						}
					}
					if (node.querySelector(`[class^="LineItem__ItemRow"]`)) {
						node.classList.add("Derp__ItemParent");
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

	private transformHeader(headerElement: HTMLElement) {
		// Add custom Bleh classes instead of breaking React structure
		headerElement.classList.add("bleh-custom-header");
	}

	private extractSongData() {
		// Genius embeds raw page data inside a window variable or script tag
		// You can intercept this to get clean JSON data for your UI
		const trackingData = (window as any).__PRELOADED_STATE__ || null;
		if (trackingData) {
			console.log("Genius Metadata captured:", trackingData);
			for (const [_, data] of Object.entries(trackingData.entities.artists) as [string, any]) {
				if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
			}
			for (const [_, data] of Object.entries(trackingData.entities.users) as [string, any]) {
				if (data.headerImageUrl) {
					console.log(data.url, data.headerImageUrl);
					banners.set(data.url, data.headerImageUrl);
				}
			}
			for (const [_, data] of Object.entries(trackingData.entities.songs) as [string, any]) {
				/* lets work with 300x300 instead of 1000x1000 */
				if (data.songArtImageThumbnailUrl) {
					covers.set(data.url, data.songArtImageThumbnailUrl);
					coverAccent.set(data.url, this.getAccentCache(data.url, data.songArtImageThumbnailUrl));
				}
			}

			for (const [_, data] of Object.entries(trackingData.entities.albums) as [string, any]) {
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
						"--derp-bg-primary",
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
				document.documentElement.style.setProperty("--derp-bg-primary", "#292424");
			}
		});
	}
}

new Genie();
