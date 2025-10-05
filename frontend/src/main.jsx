import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Usercontext from "./context/Usercontext.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Usercontext>    
        <App />
      </Usercontext>
    </BrowserRouter>
  </StrictMode>
);
