import React from 'react';
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';          // از ری اکت 2018 به بعد به این شکل فراخوانی میشه
import './style.css'
// let elem = <h1>پروژه ی تایمر</h1>
// ReactDOM.render(elem, document.getElementById("root"));       // فراخوانی ری اکت قبل از 2018
 import App from "./App"


 createRoot(document.getElementById("root")).render(<App/>);


