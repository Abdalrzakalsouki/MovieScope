import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#db0000",
    },
    secondary: {
      main: "#831010",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",

    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: 1.6,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 1.7,
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.8rem",
      lineHeight: 1.4,
    },
    overline: {
      fontSize: "0.7rem",
      textTransform: "uppercase",
    },
  },
});

export default Theme;
