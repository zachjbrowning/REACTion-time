import styles from "./Wackamole.module.scss";
import React, { useState } from "react";

import MoleHole from "./MoleHole";
import Submitter from "../Submitter/Submitter";

import { useDispatch } from 'react-redux';
import { new_score } from "../../lib/redux/actions/scoreAction";

export default function Wackamole() {
    const dispatch = useDispatch();
    const initialGaps = [1500, 200, 400, 500, 50, 1200, 800, 300];
    const [gaps, setGaps] = useState(initialGaps);
    const [started, setStarted] = useState(0);
    const [isGoing, setIsGoing] = useState(-1);
    const [time, setTime] = useState(0);
    const noMoles = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    const [moles, setMoles] = useState(noMoles)
    
    
    function rand(cieling) {
        return Math.floor(Math.random() * cieling);
    }
    
    function start() {
        setStarted(Date.now());
        setTime(Date.now());
        setIsGoing(setInterval(() => {
            setTime(Date.now());
        }, 10));
        document.getElementById("wack-start").classList.remove(styles.show);
        document.getElementById("wack-box").classList.add(styles.show);
        document.getElementById("wack-time").classList.add(styles.show);
        setTimeout(() => appear(0,0), 0);
    }
    
    function stop() {
        clearInterval(isGoing);
        setIsGoing(-1);
        document.getElementById("wack-box").classList.remove(styles.show);
        document.getElementById("wack-time").classList.remove(styles.show);
        document.getElementById("wack-submit").classList.add(styles.show);
        document.getElementById("wack-reset").classList.add(styles.show);
        setMoles(noMoles);
        setGaps(initialGaps);
        dispatch(new_score(time - started, "wackamole"));
    }

    function reset() {
        document.getElementById("wack-submit").classList.remove(styles.show);
        document.getElementById("wack-reset").classList.remove(styles.show);
        document.getElementById("wack-start").classList.add(styles.show);
    }

    function removeReset() {
        document.getElementById("wack-reset").classList.remove(styles.show);
    }
    
    function nextGap() {
        let newGaps = [...gaps];
        let result = newGaps.splice(rand(newGaps.length), 1);
        setGaps(newGaps);
        return result[0];
    }
    
    
    function hit(i, j) {
        if (gaps.length === 0) {
            stop();
        } else {
            let newMoles = [...moles];
            newMoles[i][j] = false;
            setMoles(newMoles)
            setTimeout(() => appear(i,j), nextGap());
        }
    }

    function appear(i, j) {
        if (gaps.length !== 0) {
            let newMoles = [...moles];
            let nextMole = rand(9);
            while (nextMole === (3 * i) + j) {
                nextMole = rand(9);
            }
            newMoles[Math.floor(nextMole / 3)][nextMole % 3] = true;
            setMoles(newMoles);
        }
    }
    
    const updated = time - started;
    let centis = ("0" + (Math.floor(updated / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(updated / 1000) % 60)).slice(-2);
    let start_but = <div className={`${styles.press} ${styles.show}`} id="wack-start">
        <button onClick={start} className="button is-large is-primary">start</button>
    </div>
    let reset_but = <div className={`${styles.reset}`} id="wack-reset">
        <button onClick={reset} className="button is-large">reset</button>
        <div>
            {seconds}:{centis}
        </div>
    </div>
    
    return <>
        {start_but}
        <div id="wack-box" className={styles.curse}>
            <div className={`table-container`}>
                <table className="table is-bordered">
                    <tbody>
                        {(moles).map((val, i) => (
                            <tr key={i} className={styles.row}>
                                {val.map((isMole, j) => (
                                    <MoleHole i={i} j={j} func={hit} key={j} mole={isMole}/>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {reset_but}
        <div id="wack-time" className={styles.clock}>
            {seconds}:{centis}
        </div>
        <Submitter hideReset={removeReset} reset={reset} game="wackamole" id="wack-submit"/>

    </>
}