import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import App from "./App.tsx";
import "./index.css";
import { theme } from "./theme";
import StoreProvider from "./store/Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemeProvider>
);
