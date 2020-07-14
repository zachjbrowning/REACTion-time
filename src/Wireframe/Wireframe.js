import styles from "./Wireframe.module.scss";



import React from "react";
import Landing from "../Landing/Landing";

export default function Wireframe() {
    
    
    return <div className={`${styles.mainFrame} container`}>
       <div className={`${styles.columnBox} columns is-multiline`}>
           <Landing/>
       </div>
    </div>
}