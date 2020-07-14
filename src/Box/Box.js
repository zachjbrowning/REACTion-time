import styles from "./Box.module.scss";
import React from "react";


export default function Box(props) {

    return <div className={`${styles.boxFrame} column is-6`}>
        <div className={`${styles.box}`}>
            <div className={styles.header}>
                <h2 className="title is-4">{props.title}</h2>
            </div>
            <div className={styles.content}>
                {props.content}
            </div>
            <div className={styles.submit}>
                <form>
                    <label className="label">Submit your high score</label>
                    <div className="field is-grouped">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Player name" required={true}/>
                        </p>
                        <p className="control">
                            <button className="button is-primary">Submit</button>
                        </p>
                    </div>    
                </form>
            </div>
        </div>
    </div>
}