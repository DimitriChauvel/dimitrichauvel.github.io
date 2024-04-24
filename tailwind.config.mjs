/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mulish': ['Mulish'],
				'dm': ['DM'],
				'playfair': ['Playfair'],
			},
			colors: {
				'dark': '#191B1F',
				'mid-dark': '#55565A',
				'mid-light': '#939599',
				'light': '#ECE0C8',
			},
			backgroundImage: {
				'noise': 'url("./src/assets/images/noise.png")',
				'circular-rainbow': 'radial-gradient(circle at left top,#ede6bf,#ecc947,#cb5a31,#6f5d79,#4e779a)',
				'linear-light': 'linear-gradient(to right, #ECE0C8, #ECE0C8)',
				'linear-rainbow': 'linear-gradient(to right,#ede6bf,#ecc947,#cb5a31,#6f5d79,#4e779a)',
			},
			boxShadow: {
				'no-blur': '0 0 0px #000005',
				'35-blur': '0 0 35px #000005',
			}
		},
	},
	plugins: [],
}
ls
