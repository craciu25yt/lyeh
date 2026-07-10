// I feel like discord.js rn
interface BaseSliderItem {
	id: string;
	label: string;
	type:
		| "boolean"
		| "text"
		| "number"
		| "color"
		| "button"
		| "boolean_callback"
		| "slider"
		| "slider_bottom"
		| "selector";
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

interface SelectorOptions {
	value: string;
	label?: string;
	disbled?: boolean;
	selected?: boolean;
}
interface SelectorSettingItem extends BaseSliderItem {
	type: "selector";
	options: SelectorOptions[];
}
interface StandardSettingsItem extends BaseSliderItem {
	type: "boolean" | "text" | "number" | "color" | "button" | "boolean_callback";
}

export type SettingsItem = StandardSettingsItem | SliderSettingItem | SelectorSettingItem;

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
				id: "auth",
				label: "Genius OAuth2",
				description: "Some Lyeh services require of you confirming your account",
				type: "button",
			},
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
				description: "Modifies the player width",
				min: 30,
				length: 50,
				format: "$!%",
			},
		],
	},
	{
		id: "youtube",
		title: "Lyrics Page",
		items: [
			{
				id: "youtube",
				label: "Use YouTube",
				description: "Replaces Apple Music with YouTube audio",
				type: "boolean_callback",
				default: true,
			},
			{
				id: "font",
				label: "Lyrics Font",
				description: "The font to use for the lyrics",
				type: "selector",
				default: "Programme alt",
				options: [
					{
						value: "programme",
						label: "Programme (Original)",
					},
					{
						value: "programme-alt",
						label: "Programme Alt",
					},
					{
						value: "apple-font",
						label: "Blink Mac System",
					},
				],
			},
			{
				id: "font-weight",
				label: "Font Weight",
				description: "The weight (boldness) of the selected font",
				type: "text",
				default: "200",
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
			{
				id: "clear-data",
				label: "Wipe data",
				description: "Clears all Lyeh's data. This includes settings, etc. This does NOT delete genius data",
				type: "button",
			},
		],
	},
];

export const userProfile: SettingCategory[] = [
	{
		id: "colors",
		title: "Colors",
		items: [
			{
				id: "bg-primary",
				label: "Gradient 1",
				type: "color",
				default: "#292424",
				description: "The first color of the gradient",
			},
			{
				id: "bg-secondary",
				label: "Gradient 2",
				type: "color",
				default: "#292424",
				description: "The second color of the gradient",
			},
			{
				id: "save-gradient",
				label: "Save colors",
				type: "button",
				description: "Saves your gradient to your Lyeh profile",
			},
		],
	},
];
