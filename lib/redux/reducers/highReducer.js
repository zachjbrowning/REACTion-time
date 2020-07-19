import * as types from "../types";


const initialState = {
    stopwatch : [
        {"name" : "Jonny", "score" : "123"},
                {"name" : "Jonny", "score" : "123"},
                {"name" : "Jonny", "score" : "123"},
    ],
    qwickmaffs : [],
    wackamole : []
}



export const highReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_HIGHS:
            return {
              ...state,
              [action.game] : action.highs  
            };
        default:
            return state
    }
}