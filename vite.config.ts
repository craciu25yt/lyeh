import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import basicSsl from "@vitejs/plugin-basic-ssl";
export default defineConfig(({ command }) => ({
	plugins: [
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: "Genie",
				namespace: "npm/lyeh",
				version: "1.9.1",
				match: ["https://genius.com/*", "https://dialog.filepicker.io/dialog/open/*"],
				grant: [
					"GM_addStyle",
					"GM_xmlhttpRequest",
					"GM_getValue",
					"GM_setValue",
					"GM_deleteValue",

					"GM_getValues",
					"GM_setValues",
					"GM_deleteValues",

					"GM_listValues",
					"unsafeWindow",
				],
				connect: ["genius.com", "images.genius.com", "t2.genius.com", "music.youtube.com", "lrclib.net"],
				"run-at": "document-start",
				updateURL: "https://raw.githubusercontent.com/craciu25yt/lyeh/gh-pages/genie.user.js",
				downloadURL: "https://raw.githubusercontent.com/craciu25yt/lyeh/gh-pages/genie.user.js",
			},
		}),
		vue(),
		basicSsl(),
	],
	server: {
		https: true,
		cors: true,
		headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Private-Network': 'true', // Drops the PNA loopback block
    },
	},
}));
