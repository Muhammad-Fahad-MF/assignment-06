import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f7f7f7",
        secondary: "#676767"
      },
      fontFamily: {
        RobotoRegular: ['RobotoRegular'],
        RobotoBold: ['RobotoBold'] ,
        InterBold: ['InterBold'],
      },
    },
  },
  plugins: [],
} satisfies Config;
