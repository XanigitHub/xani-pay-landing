import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,json}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        Circle: "url('./src/assets/img/header/Circle.svg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
