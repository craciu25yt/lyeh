<template>
	<error></error>
	<update></update>
	<settings></settings>
	<spotify_player></spotify_player>
</template>

<script setup lang="ts">
console.vLog("Initializing vue");
import error from "./components/error.vue";
import update from "./components/update.vue";
import settings from "./components/settings.vue";
import spotify_player from "./components/spotifyplayer.vue";

console.vLog("Initialized!");
</script>
