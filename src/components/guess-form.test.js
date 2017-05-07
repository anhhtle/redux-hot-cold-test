import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Render without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should run SubmitGuess onSubmit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = "10";
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });

    // it('Should reset input after submit', () => {
    //     const wrapper = mount(<GuessForm dispatch={() => {}} />);
    //     const value = "10";
    //     const link = wrapper.find('#userGuess');
    //     link.node.value = value;
    //     wrapper.simulate('submit');
    //     expect(link.node.value).toEqual('');
    // });
});