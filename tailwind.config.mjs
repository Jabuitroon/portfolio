/** @type {import('tailwindcss').Config} */
import formsPlugin from 'tailwindcss-animated'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        subtitle: '#034078',
        primary: '#0b132b',
        secundary: '#1282A2',
        headers: '#034078',
      },
    },
  },
  plugins: [formsPlugin],
  darkMode: 'class',
}
