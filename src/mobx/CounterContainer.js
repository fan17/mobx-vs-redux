import React from 'react';
import { observer, inject } from 'mobx-react';
import CounterComponent from '../counter/CounterComponent';

const CounterContainer = inject(
    'counterStore'
  )(observer(({
    counterStore,
  }) => {
    return (
      <CounterComponent
        counter={counterStore.counter}
        increment={counterStore.increment}
        decrement={counterStore.decrement}
      />
    );
}));

export default CounterContainer;