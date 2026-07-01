import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
export default defineConfig(({ command }) => ({
	plugins: [
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: "Genie",
				namespace: "npm/lyeh",
				// I swear I hate live server
				version: command === "build" ? pkg.version : "1.0.0",
				match: ["https://genius.com/*"],
				grant: [
					"GM_addStyle",
					"GM_xmlhttpRequest",
					"GM_getValue",
					"GM_setValue",
					"GM_deleteValue",
					"unsafeWindow",
				],
				connect: ["genius.com", "images.genius.com", "t2.genius.com"],
				"run-at": "document-start",
				// lost 30 minutes because of this
				...(command === "build" && {
					updateURL: "https://craciu25yt.github.io/lyeh/genie.derp.user.js",
					downloadURL: "https://craciu25yt.github.io/lyeh/genie.derp.user.js",
				}),
			},
		}),
		vue(),
	],
}));
