/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.75rem", //"12px"
        base: ".875rem", // 14px
        md: "1rem", // 16px
        lg: "1.25rem", // 20px
        xl: "1.5rem", // 24px
        "2xl": "1.75rem ", // 28px
        "3xl": "2.25rem", // 36px
      },
    },
  },
  plugins: [],
};
