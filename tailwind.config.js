/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional financial dashboard palette
        'primary': '#1a1a2e',
        'secondary': '#16213e',
        'accent': '#0f3460',
        'highlight': '#e94560',
        'text-primary': '#f5f5f5',
        'text-secondary': '#d4d4d4',
        'border': '#2a2a3e',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
