import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EmailProvider } from "./Components/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmailProvider>
  </StrictMode>
);
