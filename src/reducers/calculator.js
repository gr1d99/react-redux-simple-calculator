import * as types from '../actions/actionTypes'

const initialState = {
    results: null
};

export const calculatorReducer = (state=initialState, action) => {
    /* get values from action create a copy of them and attach to
     * state */

    let res;
    const { num_1, num_2 } = action;

    switch (action.type) {
        case types.ADD:
            res = parseInt(num_1, 10) + parseInt(num_2, 10);
            return {
                ...state,
                results: res
            };

        case types.SUBTRACT:
            res = parseInt(num_1, 10) - parseInt(num_2, 10);
            return {
                ...state,
                results: res
            };

        case types.MULTIPLY:
            res = parseInt(num_1, 10) * parseInt(num_2, 10);
            return {
                ...state,
                results: res
            };

        case types.DIVIDE:
            res = parseInt(num_1, 10) / parseInt(num_2, 10);
            return {
                ...state,
                results: res
            };

        case types.CLEAR:
            return {
                ...state,
                results: null
            };

        default:
            return state
    }
};