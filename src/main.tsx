import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import App from "./App.tsx";
import "./index.css";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
