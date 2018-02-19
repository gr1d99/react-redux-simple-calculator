/* Tests for action creators */

import expect from 'expect';

import * as types from '../actions/actionTypes';

import * as opTypes from '../utils/operationTypes';

import { calculate, clearResults } from "./index";


describe('calculate function', () => {
    it('should return sum() function as the default action creator', () => {
        /* test data and expected output */
        const operation = 'kjvnjnv';
        const num_1 = 10;
        const num_2 = 10;

        const expectedObj = {
            type: types.ADD,
            num_1,
            num_2
        };

        expect(calculate({operation: operation}, num_1, num_2)).toEqual(expectedObj)
    });

    it('should should call the sum() action creator', () => {
        const operation = opTypes.ADD_OP;
        const num_1 = 1;
        const num_2 = 1;

        const expectedObj = {
            type: types.ADD,
            num_1,
            num_2
        };

        expect(calculate({operation: operation}, num_1, num_2)).toEqual(expectedObj)

    });

    it('should should call the subtract() action creator', () => {
        const operation = opTypes.SUB_OP;
        const num_1 = 1;
        const num_2 = 1;

        const expectedObj = {
            type: types.SUBTRACT,
            num_1,
            num_2
        };

        expect(calculate({operation: operation}, num_1, num_2)).toEqual(expectedObj)

    });

    it('should should call the divide() action creator', () => {
        const operation = opTypes.DIVIDE_OP;
        const num_1 = 2;
        const num_2 = 12;

        const expectedObj = {
            type: types.DIVIDE,
            num_1,
            num_2
        };

        expect(calculate({operation: operation}, num_1, num_2)).toEqual(expectedObj)

    });

    it('should should call the multiply() action creator', () => {
        const operation = opTypes.MULTIPLY_OP;
        const num_1 = 2;
        const num_2 = 12;

        const expectedObj = {
            type: types.MULTIPLY,
            num_1,
            num_2
        };

        expect(calculate({operation: operation}, num_1, num_2)).toEqual(expectedObj)

    });

    it('should should call the clear() action creator', () => {
        const expectedObj = {
            type: types.CLEAR
        };

        expect(clearResults()).toEqual(expectedObj)

    });
});