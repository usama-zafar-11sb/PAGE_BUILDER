/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0f172a",
          lighter: "#1e293b",
          border: "rgba(255, 255, 255, 0.1)",
        },
        accent: {
          primary: "#6366f1",
          secondary: "#a855f7",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
