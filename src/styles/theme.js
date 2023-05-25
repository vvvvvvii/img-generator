import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: "#d4ce41",
    },
    secondary: {
      main: "#fa8080",
      light: "#fbb4b4",
    },
    default: {
      main: "#fff",
    },
  },
});
export default theme;
