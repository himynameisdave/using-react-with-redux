import actions from './actions.js';
import reducer from './reducer.js';
import initialState from './initial-state.js';



describe('Counter Reducer', () => {
    it('returns the initialState when the previous state is unknown', () => {
        const action = {};
        const actual = reducer(undefined, action);
        expect(actual).toEqual(initialState);
    });
    it('increments the counter by 1 when INCREMENT action is dispatched', () => {
        const actual = reducer(initialState, actions.increment());
        expect(actual.count).toBe(initialState.count + 1);
    });
    it('decrements the counter by 1 when DECREMENT action is dispatched', () => {
        const actual = reducer(initialState, actions.decrement());
        expect(actual.count).toBe(initialState.count - 1);
    });
});
