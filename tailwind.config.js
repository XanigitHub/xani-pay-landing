import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        'Circle': "url('./src/assets/img/header/Circle.svg')",
      },
      colors: {
        rootOpenBlue: "#E9FBF9",
        rootOrange: '#FF823B',
        rootGreen: '#124F48',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
