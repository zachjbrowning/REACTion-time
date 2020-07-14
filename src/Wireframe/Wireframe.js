import styles from "./Wireframe.module.scss";



import React from "react";
import Landing from "../Landing/Landing";
import Box from "../Box/Box";

export default function Wireframe() {
    
    
    return <div className={`${styles.mainFrame} container`}>
       <div className={`${styles.columnBox} columns is-multiline`}>
           <Landing/>
           <Box title="bro" content="HEYY"/>
           <Box content="HEYY"/>
           <Box content="HEYY"/>
       </div>
    </div>
}