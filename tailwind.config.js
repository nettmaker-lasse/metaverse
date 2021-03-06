module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'4xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			}
		},
		fontFamily: {
			sans: ['Poppins'],
			display: ['Poppins'],
			body: ['Poppins']
		}
	},
	plugins: [],
};