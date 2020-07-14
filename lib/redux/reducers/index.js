import {combineReducers } from 'redux';

import { pracReducer } from "./pracreducer";

export default combineReducers({
    prac : pracReducer,
})