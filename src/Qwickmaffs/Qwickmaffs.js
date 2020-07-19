import styles from "./Qwickmaffs.module.scss";
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { new_score } from "../../lib/redux/actions/scoreAction";

import Submitter from "../Submitter/Submitter";


export default function Qwickmaffs() {
    const dispatch = useDispatch();
    const operators = ["+","-",<>&times;</>];
    const [progress, setProgress] = useState(0);
    const [started, setStarted] = useState(0);
    const [time, setTime] = useState(0);
    const [isGoing, setIsGoing] = useState(-1);
    const [equation, setEquation] = useState({
        first : 0,
        second : 0,
        operator : operators[0],
        answer : 0
    })

    function newNum(ciel) {
        return Math.floor(Math.random() * ciel);
    }

    function newEquation() {
        let first = newNum(10);
        let second = newNum(10);
        let op = newNum(3);
        let ans = 0;
        if (op === 0) ans = first + second;
        else if (op === 1) ans = first - second;
        else if (op === 2) ans = first * second;
        setEquation({
            first : first,
            second : second,
            operator : operators[op],
            answer : ans
        }) 
    }

    function start() {
        newEquation();
        setProgress(0);
        setStarted(Date.now());
        setTime(Date.now());
        setIsGoing(setInterval(() => {
            setTime(Date.now());
        }, 10));
        document.getElementById("qwick-start").classList.remove(styles.show);
        document.getElementById("maffsBox").classList.add(styles.show);
        document.getElementById("qwick-progress").classList.add(styles.show);
        document.getElementById("qwick-time").classList.add(styles.show);
        document.getElementById("maffs-input").focus();
    }

    function stop() {
        clearInterval(isGoing);
        setIsGoing(-1);
        document.getElementById("maffsBox").classList.remove(styles.show);
        document.getElementById("qwick-progress").classList.remove(styles.show);
        document.getElementById("qwick-time").classList.remove(styles.show);
        document.getElementById("qwick-submit").classList.add(styles.show);
        document.getElementById("qwick-reset").classList.add(styles.show);
        dispatch(new_score(12, "qwickmaffs"))
    }

    function reset() {
        document.getElementById("qwick-submit").classList.remove(styles.show);
        document.getElementById("qwick-reset").classList.remove(styles.show);
        document.getElementById("qwick-start").classList.add(styles.show);
        
    }

    function removeReset() {
        document.getElementById("wack-reset").classList.remove(styles.show);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.elements.ans.value == equation.answer) { //THEY GOT ANSWER RIGHT
            setProgress(progress + 1);
            if (progress === 4) {
                stop();
            } else {
                newEquation();
            }
        } else {
            let toShake = document.getElementById("maffsBox") 
            toShake.style.animationName = styles.wrong;
            setTimeout(() => toShake.style.animationName = null, 200);
        }
        event.target.elements.ans.value = ""
    }


    const updated = time - started;
    let centis = ("0" + (Math.floor(updated / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(updated / 1000) % 60)).slice(-2);
    let start_but = <div className={`${styles.press} ${styles.show}`} id="qwick-start">
        <button onClick={start} className="button is-large is-primary">start</button>
    </div>
    let reset_but = <div className={`${styles.reset}`} id="qwick-reset">
        <button onClick={reset} className="button is-large">reset</button>
        <div>
            {seconds}:{centis}
        </div>
    </div>

    return <>
        {start_but}
        <div id="maffsBox" className={styles.maffsBox}>
            <form onSubmit={handleSubmit} style={{width:"100%"}}>
                <p className={`control ${styles.code}`}>
                    <span>{equation.first}{equation.operator}{equation.second}=</span><input id="maffs-input" name="ans" maxLength="2" className={`input ${styles.inNum}`} type="text"/>
                </p>
            </form>
        </div>
        {reset_but}
        <div id="qwick-time" className={styles.clock}>
            {seconds}:{centis}
        </div>
        <progress id="qwick-progress" className={`progress is-primary ${styles.progress}`} id="qwick-progress" value={progress} max="5"></progress>
        
        <Submitter hideReset={removeReset} reset={reset} game="qwickmaffs" id="qwick-submit"/>
    </>
}