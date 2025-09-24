/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ec: {
          primary:  "#0074D9", // azul principal
          navy:     "#001F3F", // azul oscuro
          gray50:   "#F5F5F5", // gris claro
          gray500:  "#7A7A7A", // gris medio
          white:    "#FFFFFF",
          accent:   "#E63946", // rojo acento
        },
      },
    },
  },
  plugins: [],
};
