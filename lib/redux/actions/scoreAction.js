import regeneratorRuntime from "regenerator-runtime";
import * as types from "../types";

export const new_score = (game, score) => async (dispatch) => {
    return dispatch({
        type: types.NEW_SCORE,
        game : game,
        score : score,
    })
}


export const send_score = (game) => {
    return (dispatch) => {
        return true;
    }
}