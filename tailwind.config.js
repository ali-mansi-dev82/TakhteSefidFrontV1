/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#008C7B",
          0: "#D9F5F1",
          10: "#B6EBE5",
          20: "#77D7CC",
          30: "#5BCDC0",
          40: "#29B9A8",
          50: "#00A592",
          60: "#008C7B",
          70: "#006E61",
          80: "#005C51",
          90: "#004941",
        },
        secondary: {
          default: "#1d1e22",
          0: "#e8e9e9",
          10: "#d2d2d3",
          20: "#bbbcbd",
          30: "#a5a5a7",
          40: "#8e8f91",
          50: "#77787a",
          60: "#616264",
          70: "#4a4b4e",
          80: "#343538",
          90: "#471117",
          100: "#17181b",
        },
        dark: "#1D1E22",
      },
      fontFamily: {
        Vazir: ["./src/font/Vazir.ttf"],
      },
      dropShadow: {
        modal: "0 35px 35px rgba(0,0,0,0.25)",
      },
      boxShadow: {
        bottomNavigate: "-1px 0 10px rgba(0,0,0,0.2)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1224px",
      xl: "1480px",
      "2xl": "1536px",
    },
  },
};
