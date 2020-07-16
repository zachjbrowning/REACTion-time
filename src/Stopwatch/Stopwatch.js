import styles from "./Stopwatch.module.scss";
import React, { useState } from 'react';

import Submitter from "../Submitter/Submitter";




export default function Stopwatch() {
    const [started, setStarted] = useState(0);
    const [time, setTime] = useState(0);
    const [isGoing, setIsGoing] = useState(-1);
    
    function delayStart() {
        document.getElementById("stopwatch-start").classList.toggle(styles.show);
        document.getElementById("stopwatch-clock").classList.toggle(styles.show);
        document.getElementById("stopwatch-wait").classList.toggle(styles.show);
        let delay = 500 + Math.floor((Math.random()) * 10000) / 5
        console.log("waiting", delay)
        setTimeout(() => {starter()}, delay)
    }


    function starter() {
        document.getElementById("stopwatch-wait").classList.toggle(styles.show);
        document.getElementById("stopwatch-stop").classList.toggle(styles.show);
        setStarted(Date.now());
        setTime(Date.now());
        setIsGoing(setInterval(() => {
            setTime(Date.now());
        }, 10));
    }
    
    function stopper() {
        document.getElementById("stopwatch-stop").classList.toggle(styles.show);
        document.getElementById("stopwatch-reset").classList.toggle(styles.show);
        document.getElementById("stopwatch-submit").classList.toggle(styles.show);
        clearInterval(isGoing);
        setIsGoing(-1);
    }
    
    function resetter() {
        document.getElementById("stopwatch-submit").classList.toggle(styles.show);
        document.getElementById("stopwatch-reset").classList.toggle(styles.show);
        document.getElementById("stopwatch-start").classList.toggle(styles.show);
        document.getElementById("stopwatch-clock").classList.toggle(styles.show);
        setTime(0);
        setStarted(0);
    }
    const updated = time - started;
    let centis = ("0" + (Math.floor(updated / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(updated / 1000) % 60)).slice(-2);

    let start = <div className={`${styles.swapout} ${styles.show}`} id="stopwatch-start">
        <button onClick={delayStart} className="button is-large is-primary">start</button>
    </div>
    let wait = <div className={styles.swapout} id="stopwatch-wait">
        <h3 className="title is-2">Wait....</h3>
    </div>
    let stop = <div className={styles.swapout} id="stopwatch-stop">
        <button onClick={stopper} className="button is-large is-danger">stop</button>
    </div>
    let reset = <div className={styles.swapout} id="stopwatch-reset">
        <button onClick={resetter} className="button is-large">reset</button>
    </div>

return <>
        <div id="stopwatch-clock" className={styles.clock}>
            {seconds}:{centis} 
        </div>
        <div className={`container ${styles.align}`}>
            {start}
            {wait}
            {stop}
            {reset}
        </div>
        <Submitter id="stopwatch-submit"/>
        
    </>
}