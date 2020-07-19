import {combineReducers } from 'redux';

import { scoreReducer } from "./pracreducer";

export default combineReducers({
    score : scoreReducer,
})