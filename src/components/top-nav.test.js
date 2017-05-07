import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from './top-nav';
import {newGame, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    it('Render without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should call newGame onClick', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].type).toEqual('NEW_GAME');
    })

    it('Should call toggleInfoModal onClick', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        wrapper.find('.what').simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    })
});