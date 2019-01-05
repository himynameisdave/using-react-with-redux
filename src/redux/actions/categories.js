import { categories as actionTypes } from './action-types.js';

export const updateCategoryName = (id, name) => ({
    type: actionTypes.updateCategoryName,
    id,
    name,
});
