const path = require("path")
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "rgba(var(--color-green) / <alpha-value>)",
          ...colors.green,
        },
        yellow: "rgba(var(--color-yellow) / <alpha-value>)",
        black: "rgba(var(--color-black) / <alpha-value>)",
        gray: "rgba(var(--color-gray) / <alpha-value>)",
        offwhite: "rgba(var(--color-offwhite) / <alpha-value>)",
        white: "rgba(var(--color-white) / <alpha-value>)",
        greenLight: "rgba(var(--color-green-light) / <alpha-value>)",
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
      },
      fontSize: {
        heading1: [
          "clamp(2.25rem, 2.5vw + 1.25rem, 3.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading2: [
          "clamp(2rem, 2.1875vw + 1.125rem, 2.875rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading3: [
          "clamp(1.75rem, 1.875vw + 1rem, 2.5rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading4: [
          "clamp(1.5rem, 1.875vw + 0.75rem, 2.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading5: [
          "clamp(1.375rem, 1.5625vw + 0.75rem, 2rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading6: [
          "clamp(1.25rem, 1.25vw + 0.75rem, 1.75rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        subtitle1: [
          "clamp(1.25rem, 0.625vw + 1rem, 1.5rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        subtitle2: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        body1: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        body2: [
          "clamp(1rem, 0.625vw + 0.75rem, 1.25rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption1: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption2: [
          "clamp(0.75rem, 0.3125vw + 0.625rem, 0.875rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        btn: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        xxs: [
          "clamp(0.5rem, 0.143rem + 0.952vw, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
      },
      spacing: {
        container: `max(
			  0.75rem,
			  calc((100vw - calc(1280px - 1rem * 2)) / 2)
			)`,
        "sm-container": `max(
			  1rem,
			  calc((100vw - calc(550px - 1rem * 2)) / 2)
			)`,
      },
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      // fontFamily: {
      //   sans: [
      //     "Inter",
      //     "-apple-system",
      //     "BlinkMacSystemFont",
      //     "Segoe UI",
      //     "Roboto",
      //     "Helvetica Neue",
      //     "Ubuntu",
      //     "sans-serif",
      //   ],
      // },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}
