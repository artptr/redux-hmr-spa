export function reblocksReducerCreator(...reducers) {
    return (state = {}, action) => {
        if (action.payload && action.payload.hasOwnProperty('reblockId')) {
            const localState = state[action.payload.reblockId];
            const newState = reducers.reduce((chainedState, reducer) => reducer(chainedState, action), localState);
            return {
                ...state,
                [action.payload.reblockId]: newState,
            };
        } else {
            return state;
        }
    }
}

export function reducerCreator(actionHandlers, defaultState) {
    return (state = defaultState, action) => {
        const actionHandler = actionHandlers[action.type];

        return actionHandler ? actionHandler(state, action) : state;
    };
}
