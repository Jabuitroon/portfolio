/** @type {import('tailwindcss').Config} */
import formsPlugin from 'tailwindcss-animated'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		formsPlugin
	]
}
