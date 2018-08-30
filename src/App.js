import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MobxContainer from './mobx/MobxContainer';
import Redux from './redux/Redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Mobx vs Redux</h1>
            </header>
            <nav>
                {/* <Link to="/mobx">Mobx</Link> */}
                &nbsp;|&nbsp;
                <Link to="/redux">Redux</Link>
            </nav>
            <div>
                {/* <Route path="/mobx" component={MobxContainer} /> */}
                <Route path="/redux" component={Redux} />
            </div>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
