import { combineReducers } from 'redux';

const initalState = {
    search: {
        homes: true,
        experiences: false,
        query: 'San Francisco'
    },
    filters: {
        homeType: 'all',
        guests: {
            adults: 1,
            children: 0,
            infants: 0
        },
        dateRange: {
            start: '2019-01-01',
            end: '2019-01-10',
        },
        priceRange: {
            start: 0,
            end: 500,
        }
    }
}

const searchReducer = (state = initalState.search, action) => {
    //  Code to handle updating state.search slice
    return state;
};

const filtersReducer = (state= initalState.filters, action) => {
    //  Code to handle updating state.filters slice
    return state;
};

export default combineReducers({
    search: searchReducer,
    filters: filtersReducer,
});
