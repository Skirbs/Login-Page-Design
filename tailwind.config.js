/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "blob-image": 'url("./assets/Blob_Background.svg")',
        "layered-image": 'url("./assets/Layered_Background2.svg")',
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": "transform: translateY(-200px) opacity: 0",
          "100%": "transform: translateY(0px) opacity: 100",
        },
      },
    },
  },
  plugins: [],
};
