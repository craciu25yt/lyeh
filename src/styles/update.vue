<template>
    <div v-if="visible" class="overlay" @click.self="dismiss">
        <div class="box">
            <button class="close" @click="dismiss">&times;</button>
            <h2 class="title">Lyeh — Updated</h2>
            <p class="version">
                <span class="old">{{ oldVersion }}</span>
                <span class="arrow">&rarr;</span>
                <span class="new">{{ newVersion }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);
const oldVersion = ref("");
const newVersion = ref("");

function handler(e: CustomEvent<{ oldVersion: string; newVersion: string }>) {
    oldVersion.value = e.detail.oldVersion;
    newVersion.value = e.detail.newVersion;
    visible.value = true;
}

function dismiss() {
    visible.value = false;
}

onMounted(() => {
    window.addEventListener("lyeh:version-mismatch", handler as EventListener);
});

onUnmounted(() => {
    window.removeEventListener("lyeh:version-mismatch", handler as EventListener);
});
</script>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
}

.box {
    position: relative;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    padding: 48px 64px;
    text-align: center;
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
    margin: 0 0 16px;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
}

.version {
    margin: 0;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
}

.old {
    text-decoration: line-through;
    opacity: 0.5;
}

.arrow {
    font-size: 22px;
    opacity: 0.6;
}

.new {
    font-weight: 600;
    color: #fff;
}
</style>
