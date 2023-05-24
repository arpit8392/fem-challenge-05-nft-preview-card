/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					350: '#8BACD9',
					750: '#2E405A',
					850: '#15263F',
					950: '#0D192C',
				},
				cyan: {
					550: '#00FFF8',
				},
			},
			fontFamily: {
				outfit: ['var(--font-outfit)'],
			},
		},
	},
	plugins: [],
}
