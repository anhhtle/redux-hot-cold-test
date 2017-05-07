import {reducer} from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {
    const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: Math.round(Math.random() * 100),
        showInfoModal: false
    };

    const currentState = {
        guesses: [1,2,3],
        feedback: 'HOT',
        correctAnswer: 4,
        showInfoModal: true
    }

    it('Should return initialState when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual(initialState.guesses);
        expect(state.feedback).toEqual(initialState.feedback);
        expect(state.showInfoModal).toEqual(initialState.showInfoModal);
    });

    it('Should return currentState when unknown action is passed in', () => {
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual(currentState.guesses);
        expect(state.feedback).toEqual(currentState.feedback);
        expect(state.showInfoModal).toEqual(currentState.showInfoModal);
    });

    it('Should return initialState when newGame is passed', () => {
        const state = reducer(currentState, newGame());
        expect(state.guesses).toEqual(initialState.guesses);
        expect(state.feedback).toEqual(initialState.feedback);
        expect(state.showInfoModal).toEqual(initialState.showInfoModal);
    });

    it('Should return new state and feedback on makeGuess', () => {
        const guess = 4;
        const state = reducer(currentState, makeGuess(guess));
        expect(state.guesses).toEqual([1,2,3,4]);
        expect(state.feedback).toEqual('You got it!');
    });

    it('Should return new state on toggleInfoModal', () => {
        const state = reducer(currentState, toggleInfoModal());
        expect(state.showInfoModal).toEqual(!currentState.showInfoModal);
    });
});