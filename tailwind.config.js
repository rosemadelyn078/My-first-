/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          50: "#f0f9f7",
          100: "#dcf1ed",
          200: "#b9e3db",
          300: "#96d5ca",
          400: "#1ea88e",
          500: "#10a582",
          600: "#0d8a6d",
          700: "#0a6f58",
          800: "#085443",
          900: "#063a2e",
        },
        dark: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#adb5bd",
          500: "#868e96",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#0a0e27",
        },
        gold: {
          300: "#ffd700",
          400: "#ffc700",
          500: "#ffb700",
          600: "#e6a500",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        glass: "12px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(26, 168, 142, 0.3)",
        "glow-lg": "0 0 50px rgba(26, 168, 142, 0.4)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "counter": "counter 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        counter: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
