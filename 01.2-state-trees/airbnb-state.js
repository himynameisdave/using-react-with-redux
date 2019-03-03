const state = {
    showMap: false,
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
};
