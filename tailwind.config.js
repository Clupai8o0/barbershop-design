/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Playfair Display", "serif"],
			},
		},
	},
	plugins: [],
};
