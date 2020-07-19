import {combineReducers } from 'redux';

import { scoreReducer } from "./scoreReducer";
import { highReducer } from "./highReducer";

export default combineReducers({
    high : highReducer,
    score : scoreReducer,
})