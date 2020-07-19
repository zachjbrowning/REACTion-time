import styles from "./HighScores.module.scss";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { load_highs } from "../../lib/redux/actions/highAction";

export default function HighScores() {
    const dispatch = useDispatch();
    const games = ["stopwatch", "qwickmaffs", "wackamole"]
    const [active, setActive] = useState("stopwatch")
    const highs = useSelector(state => state.high);
    const [loading, setLoading] = useState(true);

    function refresh() {
        setLoading(true);
        dispatch(load_highs(active)).then((res) => {setLoading(false)});
    }

    useEffect(() => {
        dispatch(load_highs(active)).then(res => setLoading(false));
        for (let i = 0; i < games.length; i++) {
            dispatch(load_highs(games[i]));
        }
    }, [])

    console.log(highs)

    


    return <>
        <div className={`${styles.box}`}>
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
                                {(Math.floor(score.score / 1000) % 60)}:{("0" + (Math.floor(score.score / 10) % 100)).slice(-2)}s
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.refresh}>
            {
                loading ? 
                <progress className="progress is-small is-primary"></progress>
                : <a onClick={refresh}>Refresh high scores</a>
            }
        </div>
    </>

}