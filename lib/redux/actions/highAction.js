import regeneratorRuntime from "regenerator-runtime";
import * as types from "../types";


export const load_highs = (game) => {
    return (dispatch) => {
        return dispatch({
            type : types.LOAD_HIGHS,
            highs : [
                {"name" : "Jonny", "score" : "123"},
                {"name" : "Jonny", "score" : "123"},
                {"name" : "Jonny", "score" : "123"},
            ],
            game : game
        })
    }
} 