import './CountDownTimer.css';
import React,{useState, useEffect} from 'react';
import { getRemainingTimeUntilMsTimestamp } from './CountDownTimerUtils';

const defaultRemainingTime = {
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00'
}

const CoundownTimer =({countdownstampMs})=> {
    const [remainingTime, setRemainingTime] =  useState(defaultRemainingTime)
    useEffect(()=>{
        const IntervalId = setInterval(()=>{

            updateRemainingTime(countdownstampMs);

        },1000);
        return()=>clearInterval(IntervalId);

    },[countdownstampMs]);

    function updateRemainingTime(counttimedown) {

       setRemainingTime (getRemainingTimeUntilMsTimestamp(counttimedown));

    };


    return(
        <div className='countdown-timer'>
        <span>{remainingTime.days}</span>
        <span>Days</span>
        <span>{remainingTime.hours}</span>
        <span>Hours</span>
        <span>{remainingTime.minutes}</span>
        <span>Minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>Seconds</span>
        </div>
    );

}
export default CoundownTimer;