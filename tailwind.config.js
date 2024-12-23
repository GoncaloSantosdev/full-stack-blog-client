/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Main background colors
      "code-black": "#0F172A",
      "code-darker": "#1E293B",
      "code-dark": "#334155",

      // Primary accent colors
      "code-blue": "#3B82F6",
      "code-blue-light": "#60A5FA",

      // Secondary colors
      "code-purple": "#8B5CF6",
      "code-green": "#10B981",

      // Text colors
      "code-text": "#E2E8F0",
      "code-text-light": "#F8FAFC",
      "code-text-muted": "#94A3B8",
    },
  },
  plugins: [],
};
