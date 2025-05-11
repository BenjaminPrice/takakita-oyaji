import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          hover: "hsl(var(--accent-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "bg-base": "#FDFDEA",
        "bg-surface": "#FFFFFF",
        "text-main": "#1A1A1A",
        "text-muted": "#555555",
        "bg-muted": "hsl(var(--muted))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        heading: ["var(--font-zen-maru-gothic)", "sans-serif"],
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInTop: "slideInTop 0.5s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--text-main)",
            a: {
              color: "var(--accent)",
              "&:hover": {
                color: "var(--accent-hover)",
              },
            },
            h1: {
              color: "var(--text-main)",
              fontWeight: "700",
              fontSize: "2.25em",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.3",
            },
            h2: {
              color: "var(--text-main)",
              fontWeight: "600",
              fontSize: "1.875em",
              marginTop: "1.75em",
              marginBottom: "0.75em",
              lineHeight: "1.4",
              borderBottom: "2px solid var(--accent)",
              paddingBottom: "0.5em",
            },
            h3: {
              color: "var(--text-main)",
              fontWeight: "600",
              fontSize: "1.5em",
              marginTop: "1.5em",
              marginBottom: "0.75em",
              lineHeight: "1.4",
            },
            h4: {
              color: "var(--text-main)",
              fontWeight: "600",
              fontSize: "1.25em",
              marginTop: "1.25em",
              marginBottom: "0.5em",
            },
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              lineHeight: "1.8",
              fontSize: "1.125em",
            },
            ul: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              paddingLeft: "1.5em",
              listStyleType: "disc",
            },
            ol: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              paddingLeft: "1.5em",
              listStyleType: "decimal",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
              lineHeight: "1.8",
            },
            blockquote: {
              borderLeftColor: "var(--accent)",
              borderLeftWidth: "4px",
              paddingLeft: "1.5em",
              fontStyle: "italic",
              color: "var(--text-muted)",
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            img: {
              borderRadius: "0.5rem",
              marginTop: "2em",
              marginBottom: "2em",
            },
            code: {
              color: "var(--accent)",
              backgroundColor: "var(--bg-muted)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25em",
              fontSize: "0.875em",
            },
            pre: {
              backgroundColor: "var(--bg-muted)",
              padding: "1.5em",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            hr: {
              borderColor: "var(--border)",
              marginTop: "2em",
              marginBottom: "2em",
            },
            strong: {
              color: "var(--text-main)",
              fontWeight: "600",
            },
            em: {
              color: "var(--text-muted)",
              fontStyle: "italic",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
