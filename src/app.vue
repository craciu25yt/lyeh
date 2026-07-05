<template>
	<error></error>
	<update></update>
	<settings></settings>
	<youtube_player></youtube_player>
</template>

<script setup lang="ts">
console.vLog("Initializing vue");
import error from "./components/error.vue";
import update from "./components/update.vue";
import settings from "./components/settings.vue";
import youtube_player from "./components/youtubeplayer.vue";

console.vLog("Initialized!");
</script>
