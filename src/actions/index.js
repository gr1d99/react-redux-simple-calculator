/* action creators.
 * NB: They are pure functions, they don modify anything */

import * as types from '../actions/actionTypes';

import * as opTypes from '../utils/operationTypes';

export const calculate = (...inputs) => {
    const { operation } = inputs[0];

    /* Use switch statement to check operation type
    * then make call appropriate action creator */
    switch (operation) {
        case opTypes.ADD_OP:
            return sum(inputs[1], inputs[2]);

        case opTypes.SUB_OP:
            return subtract(inputs[1], inputs[2]);

        case opTypes.MULTIPLY_OP:
            return multiply(inputs[1], inputs[2]);

        case opTypes.DIVIDE_OP:
            return divide(inputs[1], inputs[2]);

        default:
            return sum(inputs[1], inputs[2])
    }
};

export const sum = (num_1, num_2) => {
    /* sum action creator, takes in two arguments
    and returns them as is */
    return {
        type: types.ADD,
        num_1,
        num_2
    }
};

export const subtract = (num_1, num_2) => {
    /* subtract action creator, takes in two arguments
    and returns them as is */
    return {
        type: types.SUBTRACT,
        num_1,
        num_2
    }
};

export const multiply = (num_1, num_2) => {
    /* multiply action creator, takes in two arguments
    and returns them as is */
    return {
        type: types.MULTIPLY,
        num_1,
        num_2
    }
};

export const divide = (num_1, num_2) => {
    /* divide action creator, takes in two arguments
    and returns them as is */
    return {
        type: types.DIVIDE,
        num_1,
        num_2
    }
};

export const clearResults = () => {
    /* action creator that returns an action
    to clear results value */
    return {
        type: types.CLEAR
    }
};