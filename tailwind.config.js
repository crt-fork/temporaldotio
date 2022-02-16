const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [/^bg-/],
  },
  darkMode: "class",
  theme: {
    // `demo-*` screens are used for the "mobile-first" responsive demo
    screens: {
      sm: "640px",
      "demo-sm": "720px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    extend: {
      colors: {
        code: {
          highlight: "rgb(125 211 252 / 0.1)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.slate.700"),
            hr: {
              borderColor: theme("colors.slate.100"),
              marginTop: "3em",
              marginBottom: "3em",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
            },

            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: "2.4em",
              lineHeight: "1.4",
            },
            h4: {
              marginTop: "2em",
              fontSize: "1.125em",
            },
            "h2 small, h3 small, h4 small": {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.slate.500"),
              fontWeight: 500,
            },
            "h2 small": {
              fontSize: theme("fontSize.lg")[0],
              ...theme("fontSize.lg")[1],
            },
            "h3 small": {
              fontSize: theme("fontSize.base")[0],
              ...theme("fontSize.base")[1],
            },
            "h4 small": {
              fontSize: theme("fontSize.sm")[0],
              ...theme("fontSize.sm")[1],
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            ul: {
              listStyleType: "none",
              paddingLeft: 0,
            },
            "ul > li": {
              position: "relative",
              paddingLeft: "1.75em",
            },
            "ul > li::before": {
              content: '""',
              width: "0.75em",
              height: "0.125em",
              position: "absolute",
              top: "calc(0.875em - 0.0625em)",
              left: 0,
              borderRadius: "999px",
              backgroundColor: theme("colors.slate.300"),
            },
            a: {
              fontWeight: theme("fontWeight.semibold"),
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.sky.300")}`,
            },
            "a:hover": {
              borderBottomWidth: "2px",
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: theme("colors.slate.900"),
              fontWeight: theme("fontWeight.semibold"),
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            code: {
              fontWeight: theme("fontWeight.medium"),
              fontVariantLigatures: "none",
            },
            pre: {
              color: theme("colors.slate.50"),
              borderRadius: theme("borderRadius.xl"),
              padding: theme("padding.5"),
              boxShadow: theme("boxShadow.md"),
              display: "flex",
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            "p + pre": {
              marginTop: `${-4 / 14}em`,
            },
            "pre + pre": {
              marginTop: `${-16 / 14}em`,
            },
            "pre code": {
              flex: "none",
              minWidth: "100%",
            },
            table: {
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("fontSize.sm")[1].lineHeight,
            },
            thead: {
              color: theme("colors.slate.700"),
              borderBottomColor: theme("colors.slate.200"),
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: theme("fontWeight.semibold"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.slate.100"),
            },
            "tbody tr:last-child": {
              borderBottomWidth: "1px",
            },
            "tbody code": {
              fontSize: theme("fontSize.xs")[0],
            },
            "figure figcaption": {
              textAlign: "center",
              fontStyle: "italic",
            },
            "figure > figcaption": {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.slate.400"),
            "h2, h3, h4, thead th": {
              color: theme("colors.slate.200"),
            },
            "h2 small, h3 small, h4 small": {
              color: theme("colors.slate.400"),
            },
            "p, a, pre": {
              fontSize: theme("text-sm"),
            },
            code: {
              color: theme("colors.slate.200"),
            },
            hr: {
              borderColor: theme("colors.slate.200"),
              opacity: "0.05",
            },
            pre: {
              boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
            },
            a: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.sky.400"),
            },
            strong: {
              color: theme("colors.slate.200"),
            },
            thead: {
              color: theme("colors.slate.300"),
              borderBottomColor: "rgb(148 163 184 / 0.2)",
            },
            "tbody tr": {
              borderBottomColor: "rgb(148 163 184 / 0.1)",
            },
          },
        },
      }),
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["Poppins", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tight: "-2px",
      },
      fontSize: {
        xs: [".75rem", "1rem"], // 12px
        sm: [".875rem", "1.25rem"], // 14px
        tiny: [".875rem", "1.25rem"], // 14px
        base: ["1rem", "1.5rem"], // 16px
        lg: ["1.125rem", "1.75rem"], // 18px
        xl: ["1.25rem", "1.75rem"], // 20px
        "2xl": ["1.5rem", "2rem"], // 24px
        "3xl": ["1.875rem", "2.25rem"], // 30px
        "4xl": ["2.25rem", "2.5rem"], // 36px
        "5xl": ["3rem", 1], // 48px
        "6xl": ["3.75rem", 1], // 60px
        "7xl": ["4.5rem", 1], // 72px
        "8xl": ["6rem", 1], // 96px
      },
      spacing: {
        full: "100%",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "flash-code": {
          "0%": { backgroundColor: "rgb(125 211 252 / 0.1)" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        "flash-code": "flash-code 1s forwards",
        "flash-code-slow": "flash-code 2s forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
