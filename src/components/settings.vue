<template>
	<div v-if="visible" class="overlay"
	@mousedown="onOverlayMousedown"
  @mouseup="onOverlayMouseup">
		<div class="box">
			<div class="bar">
				<span class="title">{{ title }}</span>
				<button class="close" @click="dismiss">
					<svg width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<title>Close</title>
						<path
							d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
							fill="currentColor"
							fill-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div class="content">
				<div v-for="category in schema" :key="category.id" class="category-row">
					<h3 class="category-title">{{ category.title }}</h3>
					<div class="setting-list">
						<div v-for="item in category.items" :key="item.id" class="setting-row" :data-disabled="item.disabled || null" :data-tooltip="item.disabled ? item.tooltip : null">
							<div class="setting-info">
								<label :for="item.id" class="setting-label" :data-disabled="item.disabled || null">{{ item.label }}</label>

								<text :for="item.description" class="setting-description" :data-disabled="item.disabled || null"> {{ item.description }}</text>
								<!-- bottom slider -->

								<div v-if="item.type == 'slider_bottom'" class="setting-input-wrapper" :data-disabled="item.disabled || null">
									<input
										:id="item.id"
										type="range"
										v-model="settingsState[item.id]"
										@input="saveSetting(item.id, settingsState[item.id], item.format)"
										class="slider-bottom"
										:style="{ '--length': item.length + 'vh' }"
										:disabled="item.disabled"
										:min="item.min"
										:max="item.max"
										:step="item.step"
									/>
								</div>
								<div class="slider-footer" v-if="item.type == 'slider_bottom'">
									<span class="slider-value">{{ settingsState[item.id] }}</span>
									<button
										class="slider-reset"
										v-if="settingsState[item.id] != item.default"
										@click="
											saveSetting(item.id, item.default, item.format);
											settingsState[item.id] = item.default;
										"
										:disabled="item.disabled"
									>
										reset
									</button>
								</div>
							</div>
							<!-- wrapper -->

							<div class="setting-input-wrapper" :data-disabled="item.disabled || null">
								<button v-if="item.type == 'button'" class="button" @click="buttonCallback(item.id)">{{ item.label }}</button>

								<input
									v-if="item.type == 'text'"
									:id="item.id"
									type="text"
									v-model="settingsState[item.id]"
									@input="saveSetting(item.id, settingsState[item.id])"
									class="text-input"
									:disabled="item.disabled"
								/>

								<button
									v-if="item.type == 'color'"
									:id="item.id"
									class="color-input"
									@click.stop="colorCallback(item.id)"
									:disabled="item.disabled"
									:style="{ backgroundColor: settingsState[item.id] || '#292424' }"
								></button>
								<div v-if="item.type == 'color'" v-show="isOpen[item.id]" :id="'picker-' + item.id" class="color-picker-dropdown" @click.stop>
									<input
										type="text"
										class="color-hex-input"
										:value="settingsState[item.id]"
										@input="hexInputCallback(item.id, ($event.target as HTMLInputElement).value)"
										placeholder="#292424"
									/>
								</div>

								<div v-if="item.type == 'selector'" class="selector-container">
									<div class="selector-current" @click.stop="toggleSelector(item.id)">
										<!-- @vue-ignore -->
										{{ fonts[settingsState[item.id]] }}
									</div>
									<ul v-if="isOpen[item.id]" class="selector-option-menu" @click.stop>
										<li v-for="option in item.options" :key="option.value" @click="selectorCallback(item, option.value)" :disabled="option.disbled" class="selector-option">
											{{ option.label }}
										</li>
									</ul>
								</div>

								<label v-if="item.type == 'boolean'" class="switch">
									<input
										:id="item.id"
										type="checkbox"
										v-model="settingsState[item.id]"
										@change="saveSetting(item.id, settingsState[item.id], item.format)"
										class="checkbox"
										:disabled="item.disabled"
									/>
									<span class="button-slider"></span>
								</label>
								<label v-if="item.type == 'boolean_callback'" class="switch">
									<input :id="item.id" type="checkbox" v-model="settingsState[item.id]" @change="sliderCallback(item)" class="checkbox" :disabled="item.disabled" />
									<span class="button-slider"></span>
								</label>

								<input
									v-if="item.type == 'slider'"
									:id="item.id"
									type="range"
									v-model="settingsState[item.id]"
									@input="saveSetting(item.id, settingsState[item.id], item.format)"
									class="slider"
									:style="{ '--length': item.length + 'vh' }"
									:disabled="item.disabled"
									:min="item.min"
									:max="item.max"
									:step="item.step"
								/>
								<div class="slider-footer" v-if="item.type == 'slider'">
									<span class="slider-value">{{ item.format ? item.format.replace("$!", settingsState[item.id]) : settingsState[item.id] }}</span>
									<button
										class="slider-reset"
										v-if="settingsState[item.id] != item.default"
										@click="
											saveSetting(item.id, item.default, item.format);
											settingsState[item.id] = item.default;
										"
										:disabled="item.disabled"
									>
										reset
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, toRef, nextTick } from "vue";
import { settingsSchema as defaultSchema, type SettingCategory } from "./settings";

import { GM_deleteValues, GM_getValue, GM_getValues, GM_listValues, GM_setValue } from "$";

import iro from "@jaames/iro";
const props = withDefaults(
	defineProps<{
		schema?: SettingCategory[];
		title?: string;
		eventName?: string;
	}>(),
	{ schema: () => defaultSchema, title: "Settings", eventName: "lyeh:settings" },
);

const schema = toRef(props, "schema");
const visible = ref(false);
const isOpen = ref<Record<string, boolean>>({});
const fonts = {
	programme: "Programme",
	"programme-alt": "Programme alt",
	"apple-font": "BlinkMacSystemFont",
};
const colorPickers: Record<string, any> = {};
function colorCallback(id: string) {
	if (!isOpen.value[id]) {
		Object.keys(isOpen.value).forEach(k => isOpen.value[k] = false);
	}
	isOpen.value[id] = !isOpen.value[id];
	//@ts-ignore
	if (isOpen.value[id] && !colorPickers[id]) {
		nextTick(() => {
			//@ts-ignore
			const layout = [
				{
					component: iro.ui.Wheel,
					options: { wheelLightness: false },
				},
				{
					component: iro.ui.Slider,
					options: { sliderType: "value" },
				},
			];
			if (id !== "accent") {
				layout.push({
					component: iro.ui.Slider,
					options: { sliderType: "alpha" },
				});
			}
			const picker = new iro.ColorPicker(`#picker-${id}`, {
				width: 220,
				margin: 12,
				padding: 4,
				color: settingsState[id] || "#ffffff",
				layout,
			});

			// Preview live — no GM persist until "Save colors"
			picker.on("color:change", (color: any) => {
				const hexString = id === "accent" ? color.hexString : color.hex8String;
				settingsState[id] = hexString;
				applySetting(id, hexString);
				GM_setValue(`lyeh:settings:${id}`, hexString);
			});

			// Cache the picker instance
			colorPickers[id] = picker;
		});
	}
}
function toggleSelector(id: string) {
	Object.keys(isOpen.value).forEach(k => isOpen.value[k] = false);
	isOpen.value[id] = true;
}
function hexInputCallback(id: string, value: string) {
	const hex = value.startsWith("#") ? value : "#" + value;
	if (/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(hex)) {
		if (colorPickers[id]) {
			colorPickers[id].color.hexString = hex;
		}
		settingsState[id] = hex;
		applySetting(id, hex);
	}
}
function applySetting(key: string, value: any) {
	//console.log(key, value)
	if (key == "accent" || key == "background") {
		document.documentElement.style.setProperty(`--settings-${key}`, value);
		return
	}
	document.documentElement.style.setProperty(`--profile-${key}`, value);
}
function closeAllDropdowns() {
	Object.keys(isOpen.value).forEach(key => { isOpen.value[key] = false; });
}
function saveSetting(key: string, value: any, format: string | undefined = undefined) {
	GM_setValue(`lyeh:settings:${key}`, value);
	if (key === "lyrics-spacing") {
		document.documentElement.classList.toggle("lyeh-custom-spacing", !value);
		return;
	}
	const cssValue = format ? format.replace("$!", value) : value;
	document.documentElement.style.setProperty(`--settings-${key}`, cssValue);
}

function getFont(value: string) {
	const entry = Object.entries(fonts).find(([_, val]) => val === value);
	return entry ? entry[0] : value;
}
const settingsState = reactive<Record<string, any>>(
	schema.value.reduce(
		(acc, cat) => {
			cat.items.forEach((item) => {
				let storedValue = GM_getValue(`lyeh:settings:${item.id}`);
				let value = storedValue != undefined ? storedValue : item.default;

				if (item.id === "font" && storedValue) {
					value = getFont(storedValue);
				}
				if (item.disabled) {
					value = item.default;
					saveSetting(item.id, item.default);
				}
				acc[item.id] = value;
			});

			return acc;
		},
		{} as Record<string, any>,
	),
);
function selectorCallback(item: any, option: string) {
	if (item.id == "font") {
		// what the fuck in the js
		saveSetting(item.id, fonts[option as keyof typeof fonts]);
		settingsState[item.id] = option;
	}
}
function buttonCallback(id: string) {
	if (id == "clear-cache") {
		clearCache();
		window.location.reload();

	}
	if (id == "clear-data") {
		clearData();
		window.location.reload();

	}
	if (id == "auth") {
		oauth2();
	}
	if (id == "save-gradient") {
		saveGradient();
	}
}
function oauth2() {
	const authUrl = `https://api.genius.com/oauth/authorize?client_id=yqEOBD9VeImIqvcYBGjLFH86oGyQdpGOV9JBxzEAMoOeOh9Z1hVqwrrxRY_AJCdo&redirect_uri=${encodeURIComponent("https://lyeh.auchen.net/api/oauth2/callback")}&scope=me&response_type=code`;
	const width = 500;
	const height = 750;
	const left = window.screenX + (window.outerWidth - width) / 2;
	const top = window.screenY + (window.outerHeight - height) / 2.5;

	window.open(authUrl, "Lyeh Auth", `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`);

	const handleMessage = (event: MessageEvent) => {
		console.aLog("OAuth2 callback received")

		if (event.origin != "http://localhost:8080" && event.origin != "https://lyeh.auchen.net") return;

		if (event.data && event.data.type === "lyeh_token") {
			const { access_token, refresh_token, expires_in } = event.data.tokens;

			GM_setValue("lyeh:auth:access_token", access_token);
			GM_setValue("lyeh:auth:refresh_token", refresh_token);
			GM_setValue("lyeh:auth:expires_at", Date.now() + expires_in * 1000);

			console.aLog("OAuth2'ed successfully!");
			window.removeEventListener("message", handleMessage);
		}
	};

	window.addEventListener("message", handleMessage);
}


async function saveGradient() {
	const token = GM_getValue("lyeh:auth:access_token");
	if (!token) {
		console.vLog("Not authenticated, cannot save gradient");
		return;
	}

	const meta = document.querySelector('meta[property="twitter:app:url:iphone"]') as HTMLMetaElement;
	if (!meta) {
		console.vLog("Not on a user profile page");
		return;
	}
	const userId = meta.content.replace("genius://users/", "");
	const color1 = settingsState["bg-primary"];
	const color2 = settingsState["bg-secondary"];
	if (!color1 || !color2) return;

	const resp = await fetch("https://lyeh.auchen.net/api/user/gradient", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token, user: userId, color1, color2 }),
	});
	if (resp.ok) {
		saveSetting("bg-primary", color1);
		saveSetting("bg-secondary", color2);
		console.vLog("Gradient saved!");
	}
}
function sliderCallback(item: any) {
	if (item.id == "youtube") {
		saveSetting(item.id, settingsState[item.id]);
		window.location.reload();
	}
}
function clearCache() {
	console.vLog("Clearing cache...");
	const allStorage = GM_getValues(GM_listValues());
	const toDelete = [];
	let totalBytes = 0;

	for (const [key, value] of Object.entries(allStorage)) {
		if (!key.startsWith("cache:")) continue;
		toDelete.push(key);

		totalBytes += key.length * 2; // js uses utf-16

		if (value == null || value == undefined) continue;

		const type = typeof value;
		if (type === "string") {
			totalBytes += value.length * 2;
		} else if (type === "number" || type === "boolean") {
			totalBytes += String(value).length * 2;
		} else if (type === "object") {
			totalBytes += JSON.stringify(value).length * 2;
		}
	}
	if (toDelete.length != 0) {
		GM_deleteValues(toDelete);
	}
	console.vLog(`Successfully deleted ${(totalBytes / 1024).toFixed(2)} KB from StorageDB`);
}
function clearData() {
	console.vLog("Clearing data...");
	const allStorage = GM_getValues(GM_listValues());
	const toDelete = [];
	let totalBytes = 0;

	for (const [key, value] of Object.entries(allStorage)) {
		toDelete.push(key);

		totalBytes += key.length * 2; // js uses utf-16

		if (value == null || value == undefined) continue;

		const type = typeof value;
		if (type === "string") {
			totalBytes += value.length * 2;
		} else if (type === "number" || type === "boolean") {
			totalBytes += String(value).length * 2;
		} else if (type === "object") {
			totalBytes += JSON.stringify(value).length * 2;
		}
	}
	if (toDelete.length != 0) {
		GM_deleteValues(toDelete);
	}
	console.vLog(`Successfully deleted ${(totalBytes / 1024).toFixed(2)} KB from StorageDB`);
}
function handler() {
	visible.value = true;
}

function dismiss() {
	closeAllDropdowns();
	Object.keys(colorPickers).forEach(key => delete colorPickers[key]);
	schema.value.forEach(cat => {
		cat.items.forEach(item => {
			if (item.type === 'color') {
				const stored = GM_getValue(`lyeh:settings:${item.id}`);
				const restored = stored !== undefined ? stored : item.default;
				settingsState[item.id] = restored;
				document.documentElement.style.setProperty(`--profile-${item.id}`, restored);
			}
		});
	});
	visible.value = false;
}
let isOverlayClick = false;
function onOverlayMousedown(e: MouseEvent) {
	isOverlayClick = e.target == e.currentTarget
}
function onOverlayMouseup(e: MouseEvent) {
  // Only dismiss if the click both started AND ended on the background overlay
  if (isOverlayClick && e.target === e.currentTarget) {
    dismiss();
  }
  isOverlayClick = false;
}
onMounted(() => {
	window.addEventListener(props.eventName, handler as EventListener);
});

onUnmounted(() => {
	window.removeEventListener(props.eventName, handler as EventListener);
});
</script>

<style scoped>
::selection {
	color: white;
	background-color: var(--accent-70);
}
/*body {
  margin: 0 !important;
	overflow: hidden !important;
	height: 100% !important;
}*/

.overlay {
	position: fixed;
	inset: 0;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.2);
	color: #f1f2f6;
	transition: display 1s;

	margin: 0 !important;
	overflow: hidden !important;
	height: 100% !important;
}
.overlay::before {
	content: "";
	position: absolute;
	inset: 0;
	z-index: -1;
	backdrop-filter: blur(2px);
	will-change: backdrop-filter;
}
.box {
	position: relative;
	background: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(15px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 10px;
	box-shadow:
		0 8px 64px rgba(0, 0, 0, 0.5),
		inset 0 1px 0 rgba(255, 255, 255, 0.1);
	min-width: 45vw;

}
.bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 16px 20px;

	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.close {
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
	text-align: center;
	font-size: 20px;
	font-weight: 700;
}

.content {
	padding: 25px;
	overflow-y: scroll !important;
	scrollbar-color: #888 transparent;
	max-height: 70vh;
}

.category-row:not(:first-child) {
    margin-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 25px;
}

.category-title {
	font-size: 18px;
	font-weight: 700;
}
.setting-label {
	font-size: 16px;
}
.setting-label[data-disabled] {
	opacity: 0.4;
}
.setting-row {
	padding: 10px 0;
	padding-left: 20px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 10px;
	position: relative;
	transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.setting-row:hover {
	background: rgba(255, 255, 255, 0.1);
}

.setting-row[data-disabled]::after {
	content: attr(data-tooltip);
	position: absolute;
	border: 1px solid rgba(255, 255, 255, 0.15);

	opacity: 0;
	visibility: hidden;
	bottom: 105%;
	right: 0;

	pointer-events: none;

	/*I hate blur stacking*/
	background-color: #1a1a1e;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	color: white;
	padding: 5px 10px;
	border-radius: 10px;
	transition:
		opacity 0.15s ease,
		visibility 0.15s ease;
}
.setting-row[data-disabled]:hover::after {
	opacity: 1;
	visibility: visible;
}

.setting-info {
	display: flex;
	flex-direction: column;
}
.setting-description[data-disabled] {
	opacity: 0.5;
}
.setting-description {
	font-size: 14px;
	color: #c2c2c2;
}
.checkbox {
	opacity: 0;
	width: 0;
	height: 0;
}

.setting-input-wrapper[data-disabled] {
	opacity: 0.5;
}

.color-picker-container {
	position: relative;
	display: inline-block;
}

/*skidded button ngl*/
.switch {
	position: relative;
	display: inline-block;
	width: 50px;
	height: 26px;
}
.button-slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #555;
	transition: background-color 0.2s ease;
	border-radius: 26px;
}
.button-slider::after {
	content: "";
	position: absolute;
	height: 20px;
	width: 20px;
	left: 3px;
	bottom: 3px;
	background-color: white;
	transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 50%;
}
.switch input:checked + .button-slider {
	background-color: var(--accent-70); /* Adjust to match your theme */
}

.switch input:checked + .button-slider::after {
	transform: translateX(24px);
}

.switch input:focus-visible + .button-slider {
	box-shadow:
		0 0 0 2px #000,
		0 0 0 4px var(--accent-70);
}

.slider-bottom {
	margin-top: 10px;
}
.slider-bottom,
.slider {
	appearance: none;
	width: var(--length);
	cursor: pointer;
	outline: none;
	overflow: hidden;
	border-radius: 16px;
	height: 15px;
	background-color: transparent;
}

.slider-bottom::-webkit-slider-runnable-track,
.slider::-webkit-slider-runnable-track {
	height: 15px;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 16px;
}

.slider-bottom::-moz-range-track,
.slider::-moz-range-track {
	height: 15px;
	background: transparent;
	border-radius: 16px;
}

.slider-bottom::-webkit-slider-thumb,
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	height: 15px;
	width: 15px;
	background-color: #fff;
	border-radius: 50%;
	border: 2px solid var(--accent-70);
	box-shadow: -407px 0 0 400px var(--accent-70);
}

.slider-bottom::-moz-range-thumb,
.slider::-moz-range-thumb {
	height: 15px;
	width: 15px;
	background-color: #fff;
	border-radius: 50%;
	border: 1px solid var(--accent-70);
	box-shadow: -407px 0 0 400px var(--accent-70);
}

.slider-footer {
	display: flex;
	padding-top: 2px;
	margin-top: -4px;
	justify-content: space-between;
	font-size: 14px;
}
.slider-value {
	color: #c2c2c2 !important;
}
.slider-reset {
	color: #c2c2c2 !important;
}
.slider-reset:hover {
	color: white !important;
}

.button {
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.15);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

	padding: 10px 20px;
	border-radius: 10px;
}
.button:hover {
	background: var(--accent-40);
}

.text-input {
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 10px;
	padding: 8px 12px;
	color: white;
	font-size: 14px;
	width: 200px;
}
.text-input:focus {
	outline: none;
	border-color: var(--accent-70);
}

.color-input {
	width: 80px;
	height: 34px;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	transition: transform 0.1s ease;
	/*background-image:
		linear-gradient(45deg, #808080 25%, transparent 25%),
		linear-gradient(-45deg, #808080 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, #808080 75%),
		linear-gradient(-45deg, transparent 75%, #808080 75%);*/
	background-size: 10px 10px;
	background-position: 0 0, 0 5px, 5px -5px, -5px 0;
}
.color-input-btn:active {
	transform: scale(0.95);
}
.color-picker-dropdown {
	position: fixed;
	margin-top: 10px;
	right: 0;
	z-index: 10000;
	background: #1f1f1f;
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 12px;
	padding: 10px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
	overflow: visible !important;
}
.color-text-fallback {
	font-size: 11px;
	color: #000;
	font-weight: bold;
	/* Mix blend mode guarantees visibility against dark or light background colors */
	mix-blend-mode: difference;
	filter: invert(1) grayscale(1) contrast(9);
}
.color-hex-input {
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 8px;
	padding: 6px 10px;
	color: white;
	font-size: 13px;
	width: 100%;
	box-sizing: border-box;
	margin-top: 8px;
	font-family: monospace;
	margin-bottom: 10px;
}
.color-hex-input:focus {
	outline: none;
	border-color: var(--accent-70);
}
.selector-container {
	position: relative;
	color: white;
	display: inline-block;
	width: max-content;
	font-size: 16px;
}

.selector-current {
	height: 100%;
	width: 100%;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 10px;
	padding: 6px 12px;
	color: white;
	align-items: center;
}

.selector-option-menu {
	justify-self: right;
	position: absolute;
	background-color: #1f1f1f !important;
	border-radius: 10px;
	margin-top: 5px;
	z-index: 9999;
	overflow: hidden;
	min-width: max-content;
}
.selector-option {
	padding: 10px;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.selector-option:hover {
	background-color: var(--accent-50);
}
.selector-option:not(:last-child) {
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
