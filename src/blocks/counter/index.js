import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { reducerCreator } from '../../lib/reblocks';

const REBLOCK_NAME = 'counter';

const actionTypes = {
    initialize: `${REBLOCK_NAME}_INITIALIZE`,
    increment: `${REBLOCK_NAME}_INCREMENT`,
    decrement: `${REBLOCK_NAME}_DECREMENT`,
};

const actionInitialize = reblockId => ({
    type: actionTypes.initialize,
    payload: { reblockId },
});

const actionIncrement = reblockId => ({
    type: actionTypes.increment,
    payload: { reblockId },
});

const actionDecrement = reblockId => ({
    type: actionTypes.decrement,
    payload: { reblockId },
});

const actionHandlers = {
    [actionTypes.increment]: (state) => state + 1,
    [actionTypes.decrement]: (state) => state - 1,
};

const defaultState = 0;

export const reducer = reducerCreator(actionHandlers, defaultState);

const selector = (state, { reblockId }) => ({
    value: state.reblocks[reblockId],
});

const dispatcher = (dispatch, { reblockId }) => ({
    initialize: () => dispatch(actionInitialize(reblockId)),
    increment: () => dispatch(actionIncrement(reblockId)),
    decrement: () => dispatch(actionDecrement(reblockId)),
});

@connect(selector, dispatcher)
export default class Counter extends PureComponent {
    componentWillMount() {
        this.props.initialize();
    }

    render() {
        const { value, increment, decrement } = this.props;

        return (
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <span>{value}</span>
            </div>
        );
    }
}
