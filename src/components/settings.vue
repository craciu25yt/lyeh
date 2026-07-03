<template>
	<div v-if="visible" class="overlay" @click.self="dismiss">
		<div class="box">
			<div class="bar">
				<span class="title">Settings</span>
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
				<div v-for="category in settingsSchema" :key="category.id" class="category-row">
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
								<button v-if="item.type == 'button'" class="button" @click="clearCache()">{{ item.label }}</button>

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
import { ref, onMounted, onUnmounted, reactive } from "vue";
import { settingsSchema } from "./settings";

import { GM_deleteValue, GM_deleteValues, GM_getValue, GM_getValues, GM_listValues, GM_setValue } from "$";

const visible = ref(false);

function saveSetting(key: string, value: any, format: string | undefined = undefined) {
	console.log(value);
	if (format) {
		value = format.replace("$!", value);
	}
	console.log(value);

	GM_setValue(`lyeh:settings:${key}`, JSON.stringify(value));
	document.documentElement.style.setProperty(`--settings-${key}`, value);
}

const settingsState = reactive<Record<string, any>>(
	settingsSchema.reduce(
		(acc, cat) => {
			cat.items.forEach((item) => {
				acc[item.id] = GM_getValue(`lyeh:settings:${item.id}`) ? JSON.parse(GM_getValue(`lyeh:settings:${item.id}`)!) : item.default;
				if (item.disabled) {
					acc[item.id] = item.default;
					saveSetting(item.id, item.default);
				}
			});

			return acc;
		},
		{} as Record<string, any>,
	),
);
console.log(settingsState);

function clearCache() {
	console.vLog("Clearing cache...");
	const allStorage = GM_getValues(GM_listValues());
	const toDelete = [];
	let totalBytes = 0;

	for (const [key, value] of Object.entries(allStorage)) {
		if (!key.startsWith("cache:")) continue;
		toDelete.push(key);
		totalBytes += value.length * 2; // js uses utf-16
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
	visible.value = false;
}

onMounted(() => {
	window.addEventListener("lyeh:settings", handler as EventListener);
});

onUnmounted(() => {
	window.removeEventListener("lyeh:settings", handler as EventListener);
});
</script>

<style scoped>
::selection {
	color: white;
	background-color: rgba(250, 100, 160, 0.7);
}
body {
	overflow: hidden;
	height: 100%;
	margin: 0;
}
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
	min-width: 40vw;
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
	padding: 20px;
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
	background-color: rgba(250, 100, 160, 0.7); /* Adjust to match your theme */
}

.switch input:checked + .button-slider::after {
	transform: translateX(24px);
}

.switch input:focus-visible + .button-slider {
	box-shadow:
		0 0 0 2px #000,
		0 0 0 4px rgba(250, 100, 160, 0.7);
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
	border: 2px solid rgba(250, 100, 160, 0.7);
	box-shadow: -407px 0 0 400px rgba(250, 100, 160, 0.7);
}

.slider-bottom::-moz-range-thumb,
.slider::-moz-range-thumb {
	height: 15px;
	width: 15px;
	background-color: #fff;
	border-radius: 50%;
	border: 1px solid rgba(250, 100, 160, 0.7);
	box-shadow: -407px 0 0 400px rgba(250, 100, 160, 0.7);
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
	background: rgba(250, 100, 160, 0.4);
}
</style>
