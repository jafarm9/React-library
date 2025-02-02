import React from 'react';
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
// let elem = <h1>پروژه ی تایمر</h1>
// ReactDOM.render(elem, document.getElementById("root"));
 
class Timer extends React.Component {
     render(){
        return(
            <h2>
            it is  {new Date().toLocaleTimeString()}
        </h2>
        )
     }
}
class Hello extends React.Component {
    render(){
        return(
            <h1>سلام دوستان</h1>
        )
    }
}
class App extends React.Component {
     render(){
        return (
            <div>
            <Hello/>
            <Timer/>
            </div>
        )
     }
}

const tick = ()=>{
    createRoot(document.getElementById("root")).render(<App/>);
}
setInterval(()=>{
    tick();
},1000)


