import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"] ,
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#0f766e"
        },
        secondary: {
          400: "#facc15"
        },
        background: {
          50: "#f9fafb"
        }
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"]
      }
    }
  },
  plugins: [typography]
};
