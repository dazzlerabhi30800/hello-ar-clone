export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "video-img": "url('./images/Random Imgs/img1.jpg')",
        "hero-img": "url('./images/Random Imgs/img5.jpg')",
        "error-img": "url('./images/Random Imgs/error-bg.jpg')",
      },
      fontSize: {
        h1: "30px",
        th1: "50px",
        dh1: "96px",

        h2: "25px",
        th2: "40px",
        dh2: "64px",

        h3: "20px",
        th3: "25px",
        dh3: "48px",

        h4: "18px",
        th4: "24px",
        dh4: "44px",

        h5: "16px",
        th5: "18px",
        dh5: "40px",

        h6: "16px",
        th6: "18px",
        dh6: "36px",

        // p1: "14px",
        // tp1: "16px",
        // dp1: "18px",

        p1: "12px",
        tp1: "14px",
        dp1: "30px",

        p2: "12px",
        tp2: "14px",
        dp2: "20px",

        p3: "10px",
        tp3: "12px",
        dp3: "18px",

        p4: "8px",
        tp4: "10px",
        dp4: "16px",

        p5: "10px",
        tp5: "12px",
        dp5: "15px",

        p6: "9px",
        tp6: "11px",
        dp6: "14px",

        // p5: "10px",
        // tp5: "12px",
        // dp5: "14px",
      },
      colors: {
        green: "#18b26b",
        cream: "#ECF1F7",
      },
      backgroundSize: {
        "100%": "100%",
      },
      boxShadow: {
        new: "0 0 14px 1px rgba(0,0,0,0.15) ",
        hoverNew: "0 0 0 8px #1a1a1a",
        reverse: "25px 25px 0 0 #002540",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "460px",
        md: "760px",
        lg: "1040px",
        xl: "1280px",
        // "2xl": "1536px",
        // "3xl": "1700px",
        // "4xl": "1900px",
      },
      gridTemplateRows: {
        // Simple 16 row grid
        // Complex site-specific row configuration
        // layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
