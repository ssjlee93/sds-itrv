/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./build/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // safelist: [
  //   "bg-background",
  //   "text-foreground",
  //   "dark",
  //   "light",
  //   "bg-background-light",
  //   "bg-background-dark",
  //   "text-foreground-light",
  //   "text-foreground-dark",
  //   "size-5"
  // ],
};
