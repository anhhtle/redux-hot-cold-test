import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('Render without crashing', () => {
        shallow(<Header />);
    });

    it('Should hide InfoModal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    })

    it('Should show InfoModal if showInfoModal is true', () => {
        const wrapper = shallow(<Header showInfoModal={true} />);
        expect(wrapper.find(InfoModal).exists()).toEqual(true); 
    })
});

