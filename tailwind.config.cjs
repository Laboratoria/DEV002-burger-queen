/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'-main': '#8F0505',
			'secoundary-one': '#F29494',
			'secoundary-two': '#FAE3E2',
			'-text': '#0D0D0D',
		},
		fontFamily: {
			sans: ['Belleza', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
