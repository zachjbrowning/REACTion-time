import * as types from "../types";


const initialState = {
    stopwatch : [],
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