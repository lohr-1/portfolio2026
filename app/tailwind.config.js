/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'on-primary': '#e2e2e2',
        background: '#f9f9f9',
        'on-background': '#1a1c1c',
        secondary: '#5e5e5e',
        'on-secondary': '#ffffff',
        tertiary: '#3b3b3b',
        'on-tertiary': '#e2e2e2',
        surface: '#f9f9f9',
        'surface-container-highest': '#e2e2e2',
        'surface-container-low': '#f3f3f3',
        outline: '#777777',
        error: '#ba1a1a',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
      }
    },
  },
  plugins: [],
}
