import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
} from './CounterActionType';

export const counterIncrement = () => ({
    type: COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
    type: COUNTER_DECREMENT,
});

export const increment = () => (dispatch) => {
    return dispatch(counterIncrement())
};

export const decrement = () => (dispatch) => {
    return dispatch(counterDecrement())
};
