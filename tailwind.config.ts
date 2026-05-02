import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7f8",
          100: "#eceef1",
          200: "#d3d8de",
          300: "#aab3bd",
          400: "#7a8693",
          500: "#5a6573",
          600: "#414b58",
          700: "#2f3742",
          800: "#1f252e",
          900: "#12161c",
        },
        accent: {
          DEFAULT: "#1f6feb",
          ink: "#0b3a82",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
