/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter",
        outfit: "outfit",
      },
      colors: {
        BgPrimary: "#1c2d37",
        BgSecondary: "#c0cdd1",
        PrimaryText: "#1c2d37",
        BgButton: "#eed26f",
      },
    },
  },
  plugins: [],
}

