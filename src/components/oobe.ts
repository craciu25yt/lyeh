// I feel like discord.js rn
interface BaseTheme {
	id: string;
	label: string;
	color: string;
}

export type Theme = BaseTheme
export const themeList: Theme[] = [
	{
		id: "ash",
		label: "Ash",
		color: "#272323"
	},
	{
		id: "amoled",
		label: "Amoled",
		color: "#000000"
	}
];

export const accentList: Theme[] = [
	{
		id: "lyeh",
		label: "Lyeh pink",
		color: "#fa64a0"
	},
	{
		id: "red",
		label: "Red",
		color: "#EB8686"
	},
	{
		id: "orange",
		label: "Orange",
		color: "#F0A465"
	},
	{
		id: "yellow",
		label: "Yellow",
		color: "#F0DD65"
	},
	{
		id: "lime",
		label: "Lime",
		color: "#98F065"
	},
	{
		id: "radioactive",
		label: "Radioactive",
		color: "#65F067"
	},
	{
		id: "turquoise",
		label: "Turquoise",
		color: "#65F0EB"
	},
	{
		id: "blue",
		label: "Blue",
		color: "#65A8F0"
	},
	{
		id: "purple",
		label: "Purple guy",
		color: "#9D65F0"
	},
	{
		id: "fuccia",
		label: "Fuccia",
		color: "#E965F0"
	},
];
