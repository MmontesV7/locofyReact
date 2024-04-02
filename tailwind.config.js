/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#818181",
          "200": "#222831",
        },
        whitesmoke: "#eee",
        darkslategray: "#393e46",
        slategray: "#6f7989",
        darkcyan: {
          "100": "#008a91",
          "200": "#008a90",
        },
        darkturquoise: "#07d2db",
        lightseagreen: {
          "100": "#26b0b8",
          "200": "#00aeb6",
          "300": "#09a4ab",
        },
        dimgray: "#566173",
        blueviolet: "#9747ff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        manrope: "Manrope",
      },
      borderRadius: {
        "21xl": "40px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "3xl": "22px",
      "32xl": "51px",
      "12xl": "31px",
      "22xl": "41px",
      "48xl": "67px",
      "21xl": "40px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
