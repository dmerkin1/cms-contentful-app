import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1283px"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "custom-blue": "#323946",
        "hover-blue": "#3ab1f1",
        "bottom-footer-bar": "#282e3a",
        "gray-section": "#f2f2f5"
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
