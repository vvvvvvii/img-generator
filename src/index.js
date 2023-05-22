import "./all.css";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
