// src/types/violentmonkey.d.ts

declare module "$" {
	export function GM_getValue<T = unknown>(key: string, defaultValue?: T): T;

	export function GM_setValue<T = unknown>(key: string, value: T): void;

	export function GM_deleteValue(key: string): void;

	export function GM_listValues(): string[];

	export function GM_addStyle(css: string): HTMLStyleElement;

	// Add any other GM_* APIs you use...
}
