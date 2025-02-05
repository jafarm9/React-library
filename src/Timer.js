import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'


var interval;
class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){                                           // انواع چرخه ی حیاط در ری اکت
        interval = setInterval(()=>{
            console.log("componentDidMount");
            
            this.setState({
                time: new Date().toLocaleTimeString()          // انواع چرخه ی حیاط در ری اکت 
            })
        }, 1000)
    } 
    componentDidUpdate(){                                             // انواع چرخه ی حیاط در ری اکت
        console.log(this.state.time);
        
    }
     render(){
        console.log("componentDidMount");
        
        return(
            <h2 className='timer'>
            it is  {this.state.time}
        </h2>
        )
     }
}

export default Timer;
