import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
export default defineConfig({
	plugins: [
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: "Genie",
				namespace: "npm/genius-bleh",
				version: "1.0.0",
				match: ["https://genius.com/*"],
				grant: ["GM_addStyle", "GM_xmlhttpRequest", "GM_getValue", "GM_setValue", "GM_deleteValue"],
				connect: ["genius.com", "images.genius.com", "t2.genius.com"],
				"run-at": "document-start",
			},
		}),
	],
});
