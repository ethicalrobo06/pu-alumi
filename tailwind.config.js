/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'naac': "url('./src/assets/naac.jpeg')",
        'banner':"url('./src/assets/placement.jpg')"
      },
    },
  },
  plugins: [

  ],
}

