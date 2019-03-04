const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};


export default {
    increment: () => ({ type: actionTypes.INCREMENT }),
    decrement: () => ({ type: actionTypes.DECREMENT }),
};
