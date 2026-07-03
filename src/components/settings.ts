// I feel like discord.js rn
interface BaseSliderItem {
	id: string;
	label: string;
	type: "boolean" | "text" | "number" | "color" | "button" | "boolean_callback" | "slider" | "slider_bottom";
	default?: any;
	description: string;
	disabled?: boolean;
	tooltip?: string;
	format?: string;
}
interface SliderSettingItem extends BaseSliderItem {
	type: "slider" | "slider_bottom";
	max?: number;
	min?: number;
	step?: number;
	length: number;
}

interface StandardSettingsItem extends BaseSliderItem {
	type: "boolean" | "text" | "number" | "color" | "button" | "boolean_callback";
}

export type SettingsItem = StandardSettingsItem | SliderSettingItem;

export interface SettingCategory {
	id: string;
	title: string;
	items: SettingsItem[];
}

// css can't use underscore!!
export const settingsSchema: SettingCategory[] = [
	{
		id: "general",
		title: "General",
		items: [
			{
				id: "light-theme",
				label: "Light theme",
				type: "boolean",
				default: false,
				description: "Enables the light theme",
				disabled: true,
				tooltip: "Light theme is not available at the moment",
			},
			{ id: "explode", label: "Explode", type: "boolean", default: false, description: "instant combustion" },
			{
				id: "player-width",
				label: "Player width",
				type: "slider",
				default: 70,
				description: "Modifies Apple's player width",
				min: 30,
				length: 50,
				format: "$!%",
			},
		],
	},
	{
		id: "spotify",
		title: "Spotify",
		items: [
			{
				id: "spotify",
				label: "Use Spotify",
				description: "Replaces Apple Music with Spotify",
				type: "boolean_callback",
				default: false,
			},
			{
				id: "spotify-link",
				label: "Spotify link",
				description: "Links your spotify account",
				type: "button",
			},
		],
	},
	{
		id: "advanced",
		title: "Advanced",
		items: [
			{
				id: "clear-cache",
				label: "Clear cache",
				description: "Clears all Lyeh's cache (image accents...)",
				type: "button",
			},
		],
	},
];
