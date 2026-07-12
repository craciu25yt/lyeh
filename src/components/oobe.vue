<template>
<div v-if="visible" class="overlay">
	<div class="box">
		<h2>Lyeh OOBE</h2>
		<div class="progress" :style="{ '--progress-width': (step - 1) / 2 * 100 + '%' }">
			<div v-for="n in 3" :id="'progress-num'+n" class="progress-circle"
			:class="{ 'progress-current': n <= step }"
			}>{{ n }}</div>
		</div>
		<div v-if="step == 1" class="text-box">
			<p>Welcome! We will go through a small setup so we can personalise eveything for you!</p>
			<button class="next-step" id="ns1" @click="nextStep">Continue</button>
		</div>

		<div v-if="step == 2" class="step-two">
			<div class="theme">
				<p>Theme</p>
				<div class="theme-list">

					<div v-for="theme in themeList" class="theme-item">
						<div class="color-box" :id="theme.id" :style="{ backgroundColor: theme.color }" @click="handleTheme(theme)"></div>
						<p class="theme-title">{{theme.label}}</p>
					</div>


				</div>
			</div>
			<div class="accent">
				<p>Accent</p>
				<div class="theme-list">
					<div v-for="accent in accentList" class="theme-item">
						<div class="accent-box" :id="accent.id" :style="{ backgroundColor: accent.color }"  @click="handleAccent(accent)"></div>
						<!-- <p class="theme-title">{{accent.label}}</p> -->
					</div>

				</div>
			</div>
			<button class="next-step" id="ns2" @click="nextStep">Continue</button>
		</div>

		<div v-if="step == 3" class="step-three">
			<div class="text-box">
				<p>Some features require a Lyeh account linked.</p>
				<p>But don't worry! You can create one for free via OAuth, no password!</p>
				<div class="buttons">

				<button class="skip" id="skip" @click="finish">Skip & finish</button>
				<button class="next-step" id="oauth2" @click="oauth2">Login</button>
				</div>

			</div>

		</div>

	</div>
</div>
</template>

<style scoped>
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

	font-family: "Programme alt";

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
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(15px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 10px;
	box-shadow:
		0 8px 64px rgba(0, 0, 0, 0.5),
		inset 0 1px 0 rgba(255, 255, 255, 0.1);
	min-width: 50vw;
	min-height: 50vh;

}

h2 {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
  justify-self: center;

}

.progress {
    position: relative;
    display: flex;
    justify-self: center;
    gap: 8vw;

    z-index: 1;


}
.progress::before {
    content: "";
    position: absolute;

    top: 50%;
    left: 0;
    right: 0;
    height: 3px;

    background: linear-gradient(to right, var(--settings-accent, #fa64a0) var(--progress-width, 0%), rgba(255, 255, 255, 0.5) var(--progress-width, 0%));

    transform: translateY(-50%);
    z-index: -1;
    transition: background 0.3s ease;
}
.progress-current {
    /*background-color: rgba(143, 55, 89, 1) !important;*/
    background-color: var(--settings-accent) !important;
    color: black;


}
.progress-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(83,83,83);
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

p {
  justify-self: center;
}
.text-box {
    padding-top: 10vh;
}
.next-step {
    display: flex;
    justify-self: center;

    background-color: var(--accent-30);
    padding: 10px 80px;
    border-radius: 50px;
}
.skip {
    display: flex;
    justify-self: center;

    background-color: rgba(255,255,255, 0.15);
    padding: 10px 80px;
    border-radius: 50px;
}

#ns1 {
    margin-top: 8vh;
}

/* bro idk what the fuck happened but Zed opened twice and somehow I overwrited a bunch of code gonna kms its 4:58 am*/

.next-step:hover {
    background-color: var(--accent-50);
}

.theme-list {
    margin-top: 10px;
    justify-self: center;
    display: flex;
    flex-direction: row;

    justify-content: center;
    /*background-color: rgba(100, 100, 100, 0.3);*/
    width: 50%;
    height: 100px;
}

.color-box {
    height: 50px;
    width: 85px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);

}
.accent-box {
    height: 25px;
    width: 25px;
    margin: 10px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0, 0.4);

}
.theme-title {
    font-size: 14px;
}

.buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
</style>




<script setup lang="ts">
import { onMounted, ref } from "vue"
import { accentList, themeList, type Theme } from "./oobe"
import { GM_getValue, GM_setValue } from "$"

const step = ref(1)
const visible = ref(false)

let logged = false
function nextStep() {
	step.value++
}
/*
step: 1 welcome & setup message
step: 2 theme setup
step: 3 lyeh account setup

*/
function finish() {
	visible.value = false
	GM_setValue("lyeh:oobe", true)
}

function handleTheme(theme: Theme) {
	document.documentElement.style.setProperty(`--settings-background`, theme.color);
	GM_setValue("lyeh:settings:background", theme.color)
}
function handleAccent(accent: Theme) {
	document.documentElement.style.setProperty(`--settings-accent`, accent.color);
	GM_setValue("lyeh:settings:accent", accent.color)
}

function oauth2() {
	if (logged) {
		return finish()
	}
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
			const loginButton = document.getElementById("oauth2")
			const skipButton = document.getElementById("skip")
			console.log(loginButton, skipButton)
			if (loginButton) {
				loginButton.textContent = "Finish"
			}
			if (skipButton) {
				skipButton.style.display = "none"
			}
			logged = true
			GM_setValue("lyeh:auth:access_token", access_token);
			GM_setValue("lyeh:auth:refresh_token", refresh_token);
			GM_setValue("lyeh:auth:expires_at", Date.now() + expires_in * 1000);

			console.aLog("OAuth2'ed successfully!");
			window.removeEventListener("message", handleMessage);
		}
	};

	window.addEventListener("message", handleMessage);
}

// EUROPE LIVING A CELEBRATION, EUROPE LIVING A CELEBRATION, PA LLEVARTE A CANCÚN, HE VENDI'O LA PLAYSTATION,
// EUROPE LIVING A CELEBRATION, EUROPE LIVING A CELEBRATION, NO HEMO' QUEDA'O EN LA KOKUN, PERO TENGO PLAYSTATION
onMounted(() => {
	const query = GM_getValue("lyeh:oobe")
		if (!query) {
			visible.value = true
		}
	})
</script>
