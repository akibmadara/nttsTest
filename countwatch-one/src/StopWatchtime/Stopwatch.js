import React,{useState,useEffect} from "react";


const StopWatch =()=> {
    const [time,setTime]= useState(0);
    const [timerOn,setTimeOn]= useState(false);

    useEffect(()=>{
        let interval=null;
        if(timerOn){
            interval= setInterval(()=>{
                setTime(prevTime=> prevTime+10)

            },10)

        }else{

            clearInterval(interval)

        }

        return()=>clearInterval(interval)

    },[timerOn])

    return(
       
        <div className="countdown-timer">
            
            <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0"+ ((time/10)%100)).slice(-2)}</span>
           
        
        
            <button onClick={()=> setTimeOn(true)}>Start</button>
            <button onClick={()=> setTimeOn(false)}>Stop</button>
            <button onClick={()=> setTimeOn(true)}>Resume</button>
            <button onClick={()=> setTime(0)}>Reset</button>
        </div>
    );
};

export default StopWatch;