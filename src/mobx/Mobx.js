import React from 'react';
import CounterContainer from './CounterContainer'
import * as stores from './stores';
import { Provider } from 'mobx-react';

class Mobx extends React.Component {
    render() {
        return (
            <Provider { ...stores }>
                <CounterContainer />
            </Provider>
        );
    }
}

export default Mobx;
