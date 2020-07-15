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
            
        </div>
    </div>
}