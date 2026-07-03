// I feel like discord.js rn
interface BaseSliderItem {
	id: string;
	label: string;
	type: "boolean" | "text" | "number" | "color" | "button" | "slider" | "slider_bottom";
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
	type: "boolean" | "text" | "number" | "color" | "button";
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
			{
				id: "pepe",
				label: "Bottom slider",
				type: "slider_bottom",
				default: 70,
				description: "xd",
				length: 72,
				disabled: true,
				tooltip: "I love genius",
			},
		],
	},
	{
		id: "Advanced",
		title: "Advanced",
		items: [
			{
				id: "clear-cache",
				label: "Clear cache",
				description: "Clears all Lyeh's cache (image accents...)",
				type: "button",
			},
			{
				id: "spotify",
				label: "Spotify link",
				description: "Links your spotify account",
				type: "button",
			},
		],
	},
];
