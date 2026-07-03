<template>
    <div v-if="visible" class="overlay" @click.self="dismiss">
        <div class="box">
            <button class="close" @click="dismiss">&times;</button>
            <h2 class="title">Lyeh encountered an error while {{ state }}</h2>
            <div class="error-box">
                <span>{{ error }}</span>
            </div>
            <text class="lyeh-footer"
                >If the issue persists, please <a href="https://github.com/craciu25yt/lyeh/issues" target="_blank"">report it</a></text
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);
const error = ref("");
const state = ref("");

function handler(e: CustomEvent<{ err: Error }>) {
	console.vLog("Error received", e);
	error.value = e.detail.err.error?.stack || e.detail.err.message || "Unknown script error";

    state.value = e.detail.state;
    visible.value = true;
}

function dismiss() {
    visible.value = false;
}

onMounted(() => {
    window.addEventListener("lyeh:error", handler as EventListener);
});

onUnmounted(() => {
    window.removeEventListener("lyeh:error", handler as EventListener);
});
</script>

<style scoped>
::selection {
    color: white;
    background-color: rgba(250, 100, 160, 0.7);
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
    border-radius: 24px;
    padding: 48px 64px;
    box-shadow:
        0 8px 64px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    min-width: 320px;
}

.close {
    position: absolute;
    top: 12px;
    right: 16px;
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
    margin: 0 0 16px;
    font-size: 28px;
    font-weight: 700;
}

.error-box {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 15px;
    border: 10px;
    color: white;
    white-space: pre;
}
.lyeh-footer {
    margin-top: 10px;
    color: #c2c2c2;
    text-shadow: 1px 1px black;
}
a {
    color: white !important;
}
</style>
