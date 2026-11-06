<template>
  <div class="lyrics-editor">
  	<div class="bind-container">
   		<div><keybind keyName="ctrl" /> + <keybind keyName="d" /> </div>
      duplicates the current line
   </div>
  	<div class="bind-container">
   		<div><keybind keyName="ctrl" /> + <keybind keyName="shift" /> + <keybind keyName="k" /> </div>
      removes the current line
   </div>
  	<div class="bind-container">
   		<div><keybind keyName="ctrl" /> + <keybind keyName="i" /> </div>
      marks the selection/line as italic
   </div>
  	<div class="bind-container" style="">
   		<div><keybind keyName="ctrl" /> + <keybind keyName="b" /> </div>
      marks the selection/line as bold
   </div>
   <!-- <hr style="border-color: rgba(255,255,255, 0.5)"> -->
  </div>
</template>

<style scoped>
.lyrics-editor {
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
    padding: 15px 15px;
    margin-bottom: 15px;
    margin-top: 10px;
}
.keybind-key {
  background-color: var(--accent-30);
  border-radius: 5px;
  display: inline-grid;
  place-content: center;
  min-width: 30px;
  height: 30px;
  font-size: 16px;
}
.keybind-key--large {
  padding: 0 0.9rem;
}
.bind-container {
    display: flex;
    justify-content: space-between;
}
.bind-container:not(:last-child) {
    margin-bottom: 7px;
}
</style>

<script setup lang="ts">
import { h } from "vue";

const keybind = (props: { keyName: string }) => {

	return h("span", {
		class: [
			"keybind-key",
			{ "keybind-key--large": props.keyName.length > 1}
		]
	}, props.keyName)
}
</script>
