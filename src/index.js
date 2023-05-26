import "./css/all.css";
import { StyleRoot } from "radium";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <StyleRoot>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyleRoot>
);
