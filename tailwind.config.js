/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        footer: "var(--footer)",
      },
    },
  },
  plugins: [require("daisyui")],
  // darkMode: ["selector", '[data-theme="dark"]'],
};
