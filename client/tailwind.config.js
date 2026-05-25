import defaultTheme from "tailwindcss/defaultTheme";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Vite will automatically find this path inside your project!
        "hero-pattern": "url('/src/pages/admin/data/welcome-bg.svg')",
      },
    },
  },
  plugins: [],
};

const combinedConfig = {
  ...defaultTheme,
  ...tailwindConfig,
};

export default combinedConfig;
