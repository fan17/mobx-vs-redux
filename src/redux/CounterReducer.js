import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
} from './CounterActionType';

const initialState = {
    counter: 0
};

export default function CounterReducer(state = initialState, action) {
    const result = { ...state };
    switch (action.type) {
        case COUNTER_INCREMENT: {
            result.counter = state.counter + 1;
            break;
        }
        case COUNTER_DECREMENT: {
            result.counter = state.counter - 1;
            break;
        }
    }
    return result;
};
