import styles from "./Stopwatch.module.scss";
import React, { useState } from 'react';

import Submitter from "../Submitter/Submitter";


import { swap } from "../../lib/redux/actions/praction";


export default function Stopwatch() {
    const [started, setStarted] = useState(0);
    const [time, setTime] = useState(0);
    const [isGoing, setIsGoing] = useState(-1);
    function starter() {
        setStarted(Date.now());
        setIsGoing(setInterval(() => {
            setTime(Date.now());
        }, 12));
    }
    
    function stopper() {
        clearInterval(isGoing);
        setIsGoing(-1);
    }

    function resetter() {
        setTime(0);
        setStarted(0);
    }
    const updated = time - started;
    let centis = ("0" + (Math.floor(updated / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(updated / 1000) % 60)).slice(-2);

    return <>
        <div className="container">
            {seconds} : {centis} 
            <button onClick={starter} className="button">start</button>
            <button onClick={stopper} className="button">stop</button>
            <button onClick={resetter} className="button">reset</button>

        </div>
        
        
    </>
}