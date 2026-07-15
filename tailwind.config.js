/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          950: "#050608",
          900: "#080A0E",
          850: "#0B0F16",
          800: "#101722",
          700: "#172130",
        },
        chrome: {
          50: "#F5F7FA",
          100: "#E7ECF2",
          200: "#C9D3DF",
          300: "#9FAFC0",
          400: "#718299",
          500: "#536173",
          600: "#384252",
        },
        circuit: {
          300: "#77E4FF",
          400: "#36C8FF",
          500: "#00A8E8",
          600: "#087EA8",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(54,200,255,0.16)",
        card: "0 24px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 50% 0%, rgba(54,200,255,0.14), transparent 34rem)",
      },
      animation: {
        scan: "scan 4.5s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseRing: "pulseRing 6s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" },
        },
        float: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        pulseRing: {
          "0%,100%": { opacity: "0.18", transform: "scale(0.98)" },
          "50%": { opacity: "0.42", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};
