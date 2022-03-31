import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
import { DarkModeContextProvider } from "./context/darkModeContext";
axios.defaults.withCredentials = true;

  ReactDOM.render(
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
