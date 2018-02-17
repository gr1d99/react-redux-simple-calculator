/* combine all reducers */

import { combineReducers } from 'redux';

import { calculatorReducer as calculator } from "./calculator"; // from calculator file


export default combineReducers({
    calculator
})



