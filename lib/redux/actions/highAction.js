import * as types from "../types";


export const load_highs = (game) => {
    return (dispatch) => {
        return dispatch({
            type : types.LOAD_HIGHS,
            highs : [],
            game : game
        })
    }
} 