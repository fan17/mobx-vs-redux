import { connect } from 'react-redux';
import CounterComponent from '../counter/CounterComponent';
import { increment, decrement } from './CounterAction';

const mapStateToProps = state => {
    console.log(state);
    return {
        counter: state.counterModule.counter,

    }
};

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);
