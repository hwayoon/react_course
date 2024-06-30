import React from "react";
import ReactDOM from "react-dom/client";
import Gallery, { Profile } from "./App.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Gallery />
    <Profile />
  </React.StrictMode>
);
