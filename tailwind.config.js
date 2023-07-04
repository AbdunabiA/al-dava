/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueMain: "#09AEE5",
        greenMain: "#1EEF00",
      },
    },
  },
  plugins: [],
};

