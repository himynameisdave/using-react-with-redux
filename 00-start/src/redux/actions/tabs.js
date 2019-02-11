import actionTypes from './action-types.js';


export const setActiveTab = (id) => ({
    type: actionTypes.tabs.setActiveTab,
    id,
});
