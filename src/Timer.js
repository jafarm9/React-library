import React from 'react';
// import { createRoot } from 'react-dom/client';
import './style.css'

var interval;

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            time : 5
        }
    }
    startInterval = () =>{
        interval =  setInterval(()=>{            
            this.setState({
                time : this.state.time -1 
            })
         
        },1000)
    }

    stopInterval = ()=>{
        clearInterval(interval);
    }

    componentDidUpdate(){
        if (this.state.time === 0){
            this.stopInterval();
        }
    }
     render(){        
        return(
            <>
            <h2 className='timer'>
              {this.state.time}
        </h2>
        <div className='btn_box'>
            <span className='action_btn start_btn' onClick={this.startInterval}>Start</span>
            <span className='action_btn stop_btn' onClick={this.stopInterval}>Stop</span>
        </div>

            </>
        )
     }
}

export default Timer;
