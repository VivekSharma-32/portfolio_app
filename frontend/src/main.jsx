import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="bottom-right" hideProgressBar={true} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
