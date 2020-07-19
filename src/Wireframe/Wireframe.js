import styles from "./Wireframe.module.scss";
import React from "react";



import Box from "../Box/Box";

import Landing from "../Landing/Landing";
import HighScores from "../HighScores/HighScores";
import Stopwatch from "../Stopwatch/Stopwatch";
import Qwickmaffs from "../Qwickmaffs/Qwickmaffs";
import Wackamole from "../Wackamole/Wackamole";

export default function Wireframe() {
    
    
    return <div className={`${styles.mainFrame} container`}>
        <div className={`${styles.columnBox} columns is-multiline is-centered`}>
           <Landing/>
           <Box title="High Scores" content={<HighScores/>} size={10}/>
        </div>
        <div className={`${styles.columnBox} columns is-multiline`}>
           <Box title="Stop(the)watch" content={<Stopwatch/>}/>
           <Box title="Qwik Maffs" content={<Qwickmaffs/>}/>
           <Box title="Wackamole" content={<Wackamole/>}/>
        </div>
    </div>
}