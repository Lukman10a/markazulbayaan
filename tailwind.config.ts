import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    "2xl": {
      max: "1400px",
    },
    xl: {
      max: "1279px",
    },
    lg: {
      max: "1023px",
    },
    "2md": {
      max: "950px",
    },
    md: {
      max: "767px",
    },
    sm: {
      max: "639px",
    },
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to right, rgba(8,19,72,0.1), rgba(255,149,87,0.1))",
        "new-gradient":
          "linear-gradient(to right, rgba(8, 19, 72, 0.8), rgba(242, 180, 0, 0.8));",
        "home-gradient":
          "linear-gradient(-89.631deg, #f2b400 0%, #FFFFFF 100%);",
        "main-gradient-blue":
          "background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(253, 230, 167, 1), rgba(246, 180, 23, 1));",
        "main-yellow":
          "linear-gradient(to top right, rgba(255, 255, 255, 1), rgba(255, 120, 57, 0.5))",
        "nav-gradient-old":
          "linear-gradient(to right,rgba(8,19,72,.8), rgba(255, 149, 87, .8))",
        "nav-gradient":
          "radial-gradient(75.6% 80.76% at 66.91% 110.17%,#f1f0ee 0,#f1f0ee 100%)",
        "nav-items":
          "radial-gradient(75.6% 80.76% at 66.91% 110.17%, #f37920 0, #f1f0ee 100%)",
        "secondary-gradient":
          "linear-gradient(to right, rgba(80, 206, 245, 0.2), rgba(255, 149, 87, 0.2))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(0deg, #FFFFFF 69.71%, #FFF8E8 122.01%)",

        // #0D1363
        // #CD9418
      },
      boxShadow: {
        "custom-text": "0px 4px 3.7px 0px #00000066 inset",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      gridTemplateColumns: {
        repeat4: "repeat(4, minmax(100px, 500px))",
        responsive300: "repeat(auto-fit, minmax(300px, 1fr))",
        responsive250: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
