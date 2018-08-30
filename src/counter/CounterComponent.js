import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterComponent extends Component {
    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }
        
    render() {
        return (
            <div>
                <div>Counter: {this.props.counter}</div>
                <button onClick={() => this.increment()}>increment</button>
                <button onClick={() => this.decrement()}>decrement</button>
            </div>
        );
    }
}

CounterComponent.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

export default CounterComponent;
