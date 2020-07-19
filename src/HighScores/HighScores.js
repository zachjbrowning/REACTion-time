import styles from "./HighScores.module.scss";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function HighScores() {
    const games = ["stopwatch", "qwickmaffs", "wackamole"]
    const [active, setActive] = useState("stopwatch")
    const highs = useSelector(state => state.high);


    return <div className={`${styles.box}`}>
        <div className="tabs is-centered">
            <ul>
                {games.map((val, idx) => (
                    <li key={idx} className={val === active ? "is-active" : ""}>
                        <a onClick={() => setActive(val)}>{val}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className={styles.scores}>
            {
                highs[active].map((score, idx) => (
                    <div key={idx} className={`${idx % 2 === 1 ? styles.odd : ""} ${styles.score}`}>
                        <div className={styles.rank}>
                            {idx + 1}
                        </div>
                        <div className={styles.name}>
                            {score.name}
                        </div>
                        <div className={styles.value}>
                            blah
                        </div>
                    </div>
                ))
            }
        </div>
    </div>


}