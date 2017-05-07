import React from 'react';
import {InfoModal} from './info-modal';
import {shallow} from 'enzyme';
import {toggleInfoModal} from '../actions';

describe('<InfoModal />', () => {
    it('Render without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Should call toggleInfoModal onClick', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch} />);
        wrapper.find('.close').simulate('click', {
            preventDefault(){}
        })
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    })

});