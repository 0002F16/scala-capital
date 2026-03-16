import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        scala: {
          blue: '#022AB0',
          cyan: '#37D1DD',
          gray: '#515961',
          sky: '#1297F2',
          black: '#1C1C1C',
        },
      },
      fontFamily: {
        cardo: ['var(--font-cardo)', 'Georgia', 'serif'],
        nunito: ['var(--font-nunito)', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
