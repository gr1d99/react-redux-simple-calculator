import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import '../../components/testSetup';

import { CalculatorForm } from "./Form";

const setup = () => {

    const props = {
        calculator: {
            results: {}
        },
        calculate: jest.fn(),
        clearResults: jest.fn()
    };

    const enzymeWrapper = shallow(<CalculatorForm {...props}/>);
    return {enzymeWrapper}
};

describe('<Form/> container', () => {
    const { enzymeWrapper } = setup();
    it('should render divs', () => {
        expect(enzymeWrapper.find('div').length).toBeGreaterThan(0)
    });

    it('should contain methods', () => {
        expect(enzymeWrapper.instance().clearInternalState());
        expect(enzymeWrapper.instance().getOptions())
    });

    it('should clear internal state', () => {
        console.log(enzymeWrapper.state())
    });
});