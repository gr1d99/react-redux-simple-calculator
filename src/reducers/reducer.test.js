/* Tests for calculator reducer */

import expect from 'expect';

import { calculatorReducer, initialState } from "./calculator";
import * as types from '../actions/actionTypes';


describe('calculator Reducer tests', () => {
    let expectedState;
    const num_1 = parseInt(10, 10);
    const num_2 = parseInt(5, 10);

    it('should return default state', () => {
        expect(calculatorReducer(undefined, num_2, num_2)).toEqual(initialState)
    });

    it('should handle ADD', () => {
        const res = num_1 + num_2;
        expectedState = {
            ...initialState,
            results: res
        };
        expect(calculatorReducer(undefined, {type: types.ADD, num_1,  num_2})).toEqual(expectedState)
    });

    it('should handle SUBTRACT', () => {
        const res = num_1 - num_2;
        expectedState = {
            ...initialState,
            results: res
        };
        expect(calculatorReducer(undefined, {type: types.SUBTRACT, num_1,  num_2})).toEqual(expectedState)
    });

    it('should handle DIVIDE', () => {
        const res = num_1 / num_2;
        expectedState = {
            ...initialState,
            results: res
        };
        expect(calculatorReducer(undefined, {type: types.DIVIDE, num_1,  num_2})).toEqual(expectedState)
    });

    it('should handle MULTIPLY', () => {
        const res = num_1 * num_2;
        expectedState = {
            ...initialState,
            results: res
        };
        expect(calculatorReducer(undefined, {type: types.MULTIPLY, num_1,  num_2})).toEqual(expectedState)
    });

    it('should handle CLEAR', () => {
        expect(calculatorReducer(undefined, {type: types.CLEAR})).toEqual(initialState)
    });
});