import regeneratorRuntime from "regenerator-runtime";
import * as types from "../types";
import ScoreAPI from "../../api/scores";

export const load_highs = (game) => {
    return (dispatch) => {
        return ScoreAPI.get(game)
        .then(res => {
            return dispatch({
                type : types.LOAD_HIGHS,
                highs : res.data.scores,
                game : game
            });
            
        }).catch(res => {
            console.log(res)
        })
        
        
    }
} 