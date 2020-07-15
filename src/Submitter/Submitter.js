import styles from "./Submitter.module.scss";
import React from 'react';


export default function Submitter() {
    return <div className={styles.submitBox}>
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
}