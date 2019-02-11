
const loggingMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.group(action.type);
            console.log('Action:', action);
            console.log('Previous State:', store.getState());
            const result = next(action);
            console.log('Next State:', store.getState());
            console.groupEnd(action.type);
            return result;
        };
    };
};

export default loggingMiddleware;
