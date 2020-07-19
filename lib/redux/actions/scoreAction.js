import regeneratorRuntime from "regenerator-runtime";
import * as types from "../types";
import store from "../store";
import ScoreAPI from "../../api/scores";

export const new_score = (score, game) => async (dispatch) => {
    return dispatch({
        type: types.NEW_SCORE,
        game : game,
        score : score,
    })
}


export const send_score = (game, name) => {
    return (dispatch) => {
        let score = store.getState().score[game];
        let params = {
            score : score,
            name : name
        }
        return ScoreAPI.add(game, params).catch((res) => res);
    }
}