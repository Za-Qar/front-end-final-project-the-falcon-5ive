import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./Pages/Index";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Index />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
