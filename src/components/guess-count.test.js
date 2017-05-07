import React from 'react';
import {GuessCount} from './guess-count';
import {shallow} from 'enzyme';


describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render props', () => {
        const count = 3;
        const wrapper = shallow(<GuessCount count={count} />);
        expect(wrapper.find('#count').text()).toEqual(count.toString());
    });
});