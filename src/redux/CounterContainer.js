import { connect } from 'react-redux';
import CounterComponent from '../counter/CounterComponent';
import { counterIncrement, counterDecrement } from './CounterAction';

const mapStateToProps = state => {
    return {
        counter: state.counterModule.counter,

    }
};

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);
