import styles from "./Submitter.module.scss";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { send_score } from "../../lib/redux/actions/scoreAction";
import { load_highs } from "../../lib/redux/actions/highAction";

export default function Submitter(props) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        props.hideReset();
        dispatch(send_score(props.game, event.target.elements.name.value)).then(res => {setIsLoading(false); props.reset(); dispatch(load_highs(props.game))})
    }
    
    let form = <form onSubmit={handleSubmit} style={{width:"100%"}}>
        <label className="label">Submit your high score</label>
        <div className="field is-grouped">
            <p className="control is-expanded">
                <input className="input" type="text" name="name" placeholder="Player name" required={true}/>
            </p>
            <p className="control">
                <button className="button is-primary">Submit</button>
            </p>
        </div>    
    </form>
    let loading = <progress className="progress is-small is-primary"></progress>
    return <> 
        <div id={props.id} className={styles.submitBox}>
            {
                isLoading ? "" : form
            }
        </div>
        {
            isLoading ? loading : ""
        }
    </>
}