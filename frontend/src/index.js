import React from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
const getRoot = document.getElementById('root');
const root = createRoot(getRoot);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
