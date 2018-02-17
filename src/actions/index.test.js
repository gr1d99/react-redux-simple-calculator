/* Tests for action creators */

import expect from 'expect';

import * as types from '../actions/actionTypes';

import * as opTypes from '../utils/operationTypes';

import { calculate } from "./index";


describe('calculate funtion', () => {
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

        expect(calculate(operation, num_1, num_2)).toEqual(expectedObj)
    });
});