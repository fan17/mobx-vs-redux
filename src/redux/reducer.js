import { combineReducers } from 'redux';

import CounterReducer from './CounterReducer';

const rootReducer = combineReducers({
    counterModule: CounterReducer,
});

export default rootReducer;
