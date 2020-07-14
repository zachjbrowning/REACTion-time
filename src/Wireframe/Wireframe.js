import styles from "./Wireframe.module.scss";



import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { swap } from "../../lib/redux/actions/praction";

export default function Wireframe() {
    let aye = useSelector(state => state.prac)
    const dispatch = useDispatch();
    return <div className={`${aye ? styles.check : ""} container`}>
        HELLGHDFJK
        <button onClick={() => dispatch(swap())}>BRUH</button>
    </div>
}