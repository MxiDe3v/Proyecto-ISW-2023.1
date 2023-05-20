
import React from 'react';
import ReactDOM from 'react-dom/client';

<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom";
=======

import { BrowserRouter } from "react-router-dom";
>>>>>>> f70b861e0b8e6a7c816bb74a7f055abb88d270cf

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import App from './App';

import ResponsiveAppBar from "./ResponsiveAppBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
=======

root.render(
  <BrowserRouter>
    <ResponsiveAppBar/>
    <App />
  </BrowserRouter>
>>>>>>> f70b861e0b8e6a7c816bb74a7f055abb88d270cf
);
