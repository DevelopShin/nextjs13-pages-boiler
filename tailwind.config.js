/** @type {import('tailwindcss').Config} */

const px_0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px_0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px_0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class', //
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
			},
			borderWidth: px_0_10,
			fontSize: px_0_100,
			lineHeight: px_0_100,
			minWidth: px_0_200,
			minHeight: px_0_200,
			spacing: px_0_200,
		},
	},
	plugins: [],
};
