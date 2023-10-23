import { createTheme } from "@mui/material/styles";

export const tokens = {
  error: "#FFB4AB",
  outline: "#958E99",
  background: "#FFFFFF",
  grey: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
  primary: {
    100: "#d9dcf0",
    200: "#b2b9e1",
    300: "#8c97d3",
    400: "#6574c4",
    500: "#3f51b5",
    600: "#324191",
    700: "#26316d",
    800: "#192048",
    900: "#0d1024",
  },
  secondary: {
    100: "#dcdcdc",
    200: "#b8b8b8",
    300: "#959595",
    400: "#717171",
    500: "#4e4e4e",
    600: "#3e3e3e",
    700: "#2f2f2f",
    800: "#1f1f1f",
    900: "#101010",
  },
};
// mui theme settings
export const theme = createTheme({
  // add breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#4e4e4e",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 36,
      fontWeight: 600,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
    },
  },
});
