import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        disabledOpacity: ".3",
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#024940",
              foreground: "#f8fbef",
            },
            secondary: {
              DEFAULT: "#f8fbef",
              foreground: "#024940",
            }
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#f8fbef",
              foreground: "#024940",
            },
            secondary: {
              DEFAULT: "#024940",
              foreground: "#f8fbef",
            }
          },
        },
      },
    })
  ],
};
export default config;
