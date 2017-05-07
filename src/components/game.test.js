import React from 'react';
import Game from './game';
import {shallow} from 'enzyme';

describe('<Game />', () => {
    it('Render without crashing', () => {
        shallow(<Game />);
    });
});