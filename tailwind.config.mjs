/** @type {import('tailwindcss').Config} */
import formsPlugin from 'tailwindcss-animated'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        textcolor: '#1282A2',
        primary: '#034078',
        secundary: '#001F54',
        dark: '#0A1128',
      },
    },
  },
  plugins: [formsPlugin],
}
