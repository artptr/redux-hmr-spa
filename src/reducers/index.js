import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reblocksReducerCreator } from '../lib/reblocks';
import { reducer as counterReducer } from '../blocks/counter';

export default combineReducers({
    reblocks: reblocksReducerCreator(
        counterReducer
    ),
    routing: routerReducer,
});
