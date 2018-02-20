import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import './testSetup';


import { App } from "./App";


const setup = () => {
    /* setup component for testing */
    const enzymeWrapper = shallow(<App/>);

    return {enzymeWrapper}
};


describe('<App/> component', () => {

    it('should render self', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div').length).toBeGreaterThan(0);
    })
});