import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("react-container");
const root = createRoot(container);
root.render(<App />);
