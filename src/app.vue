<template>
	<error></error>
	<oobe></oobe>
	<update></update>
	<settings></settings>
	<settings :schema="userProfile" title="User Settings" event-name="lyeh:settings:user"></settings>
	<youtube_player></youtube_player>
</template>

<script setup lang="ts">
console.vLog("Initializing vue");
import error from "./components/error.vue";
import update from "./components/update.vue";
import settings from "./components/settings.vue";
import youtube_player from "./components/youtubeplayer.vue";
import oobe from "./components/oobe.vue";
import { userProfile } from "./components/settings";

console.vLog("Initialized!");
</script>
