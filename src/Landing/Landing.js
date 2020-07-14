import styles from "./Landing.module.scss";
import React from 'react';

export default function Landing() {
    return <div className={`${styles.main} column is-10`}>
        <h1 className="title is-1">Woahh.. hey there!</h1>
    </div>
}