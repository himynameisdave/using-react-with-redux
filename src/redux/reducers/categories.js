import uuid from 'uuid';
import { categories as actionTypes } from '../actions/action-types.js';
import createReducer from './create-reducer.js';

const categoryFactory = (name = 'New category') => ({
    id: uuid(),
    name,
    notes: [],
});

const initalState = [
    categoryFactory('Personal'),
    categoryFactory('Work'),
    categoryFactory('Other'),
];

const actionsMap = {
    [actionTypes.updateCategoryName]: (state, action) => state.map(category => category.id !== action.id
        ? category
        : ({ ...category, name: action.name })
    )
};

export default createReducer(initalState, actionsMap);
