import React from 'react';
import {shallow} from 'enzyme';
import {GuessSection} from './guess-section';
import GuessForm from './guess-form';

describe('<GuessSection />', () => {
    it('Render without crashing', () => {
        const wrapper = shallow(<GuessSection />);
        expect(wrapper.find(GuessForm).exists()).toEqual(true);
    });

    it('Render feedback props', () => {
        const feedback = 'test';
        const wrapper = shallow(<GuessSection feedback={feedback}/>);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});