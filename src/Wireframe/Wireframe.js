import styles from "./Wireframe.module.scss";
import React from "react";



import Box from "../Box/Box";

import Landing from "../Landing/Landing";
import Stopwatch from "../Stopwatch/Stopwatch";
import Qwickmaffs from "../Qwickmaffs/Qwickmaffs";

export default function Wireframe() {
    
    
    return <div className={`${styles.mainFrame} container`}>
       <div className={`${styles.columnBox} columns is-multiline`}>
           <Landing/>
           <Box title="Stop(the)watch" content={<Stopwatch/>}/>
           <Box title="Qwik Maffs" content={<Qwickmaffs/>}/>
           <Box content="HEYY"/>
       </div>
    </div>
}