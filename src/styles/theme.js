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
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: "6px 10px",
          "@media(min-width:576px)": {
            padding: "8px 22px",
          },
        }),
      },
    },
  },
});
export default theme;
