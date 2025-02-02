import React from 'react';
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
// let elem = <h1>پروژه ی تایمر</h1>

// ReactDOM.render(elem, document.getElementById("root"));
 
const tick = ()=>{
    const elem = (
        <div>
        <h1> پروژه ی تایمر </h1>
        <h2>
                it is {new Date().toLocaleTimeString()}
        </h2>
        </div>
    )
    createRoot(document.getElementById("root")).render(elem);
}
setInterval(()=>{
    tick();
},1000)


