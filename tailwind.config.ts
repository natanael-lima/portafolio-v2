import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      "loop-scroll": {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      // Mantén las animaciones predeterminadas (ej. `ping`) sin alterarlas.
    },
    animation: {
      "loop-scroll": 'loop-scroll 50s linear infinite', // 50s ajustable
      // Mantén la animación `ping` predeterminada si la necesitas.
    },
  },
  plugins: [],
};
export default config;
