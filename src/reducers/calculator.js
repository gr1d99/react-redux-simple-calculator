import * as types from '../actions/actionTypes'

const initialState = {
    results: null
};

export const calculatorReducer = (state=initialState, action) => {
    /* get values from action create a copy of them and attach to
     * state */
    switch (action.type) {
        case types.ADD:
            const { num_1, num_2 } = action;
            const res = parseInt(num_1, 10) + parseInt(num_2, 10);
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