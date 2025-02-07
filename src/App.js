import React from 'react';
// import { createRoot } from 'react-dom/client';
import './style.css'

import Hello  from './Hello';
import Timer from './Timer';

// var interval;


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "Hello everyone"
        }
    }
    handleSetTitle = ()=>{
        this.setState({
            title : "Hello Codeyad"
        }) 
    } 
    
     render(){
        return (
            <div className='main'>
            <Hello title = {this.state.title}/>
            <Timer  handleSetTitle = {this.handleSetTitle}/>
            </div>
        )
     }
}
export default App;