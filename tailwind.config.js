/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graybg: "#e8e7e5",
        lime: "#59bba1",
        greentxt: "#10253f"
      },
    },
  },
  plugins: [],
};
