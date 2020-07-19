import * as types from "../types";

const initialState = {
    stopwatch : null,
    qwickmaffs : null,
    wackamole : null
}

export const scoreReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.NEW_SCORE:
            return {
              ...state,
              [action.game] : action.score  
            };
        case types.NULL:
            return state
        default:
            return state
    }
}