/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		colors: {
			current: "currentColor",
			transparent: "transparent",
			white: "#FFFFFF",
			black: "#090E34",

			dark: "#17181f",
			primary: "#6D28D9",
			pureBlack: "#000000",
			darkgray: "#17181F",
			indigo: "#c766f1",
			purple: "#a855f7",
			pink: "#ec4899",
			yellow: "#FBB040",
			"body-color": "#959CB1",
			colorgradient1: "#4ca5ff",
			colorgradient2: "#b673f8",
			testcolor:"#9F1F7B",
		},
		screens: {
			xs: "450px",
			// => @media (min-width: 450px) { ... }

			sm: "575px",
			// => @media (min-width: 576px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "992px",
			// => @media (min-width: 992px) { ... }

			xl: "1200px",
			// => @media (min-width: 1200px) { ... }

			"2xl": "1400px",
			// => @media (min-width: 1400px) { ... }
		},
		extend: {
			boxShadow: {
				signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
				one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
				sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
