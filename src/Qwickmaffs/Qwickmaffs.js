import styles from "./Qwickmaffs.module.scss";
import React from "react";

import Submitter from "../Submitter/Submitter";

export default function Qwickmaffs() {
    
    
    
    
    
    return <>
        <progress className="progress is-primary" id="qwick-progress" value="1" max="5"></progress>
        <Submitter id="qwick-submit"/>
    </>
}