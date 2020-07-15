import styles from "./Wireframe.module.scss";
import React from "react";



import Box from "../Box/Box";

import Landing from "../Landing/Landing";
import Stopwatch from "../Stopwatch/Stopwatch";

export default function Wireframe() {
    
    
    return <div className={`${styles.mainFrame} container`}>
       <div className={`${styles.columnBox} columns is-multiline`}>
           <Landing/>
           <Box title="Stopwatch" content={<Stopwatch/>}/>
           <Box content="HEYY"/>
           <Box content="HEYY"/>
       </div>
    </div>
}