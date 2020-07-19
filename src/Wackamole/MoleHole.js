import styles from "./Wackamole.module.scss";
import React from 'react';

import Mole from "./Mole";

export default function MoleHole(props) {
    function handleHit() {
        if (props.mole) {
            props.func(props.i, props.j)
        }
    }
    return <td onClick={handleHit}>
        <Mole show={props.mole}/>
    </td>
}