import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        DEFAULT: "var(--radius)",
        sm: "var(--radius)",
        md: "var(--radius)",
        lg: "var(--radius)",
        xl: "var(--radius)",
        "2xl": "var(--radius)",
        "3xl": "var(--radius)",
        full: "var(--radius)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-border": {
          "0%, 100%": {
            "box-shadow": "0 0 0 0 gray",
          },
          "50%": {
            "box-shadow": "0 0 0 2px gray",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-border": "pulse-border 1s ease-in-out infinite",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
