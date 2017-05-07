import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('actions', () => {
    it('Should return newGame action', () => {
        const action = newGame();
        expect(action.type).toEqual('NEW_GAME');
    });

    it('Should return makeGuess action', () => {
        const guess = 19;
        const action = makeGuess(guess);
        expect(action.type).toEqual('MAKE_GUESS');
        expect(action.guess).toEqual(guess);
    });

    it('Should return toggleInfoModal action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual('TOGGLE_INFO_MODAL');
    });
});