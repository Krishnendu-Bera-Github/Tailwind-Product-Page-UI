/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        grayishBlue: "hsl(223, 64%, 98%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        darkBlue: "hsl(220, 13%, 13%)",
      },
    },
  },
  plugins: [],
};
