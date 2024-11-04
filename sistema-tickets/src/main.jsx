import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TicketsApp from "./TicketsApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { ScreenSizeContextProvider } from "./context/screenSizeContext/ScreenSizeContextProvider.jsx";
import { AuthContextProvider } from "./context/authContext/AuthContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <AuthContextProvider>


    <BrowserRouter>
      <ScreenSizeContextProvider>
        <TicketsApp />
      </ScreenSizeContextProvider>
    </BrowserRouter>
    </AuthContextProvider>
);
