import React, { Component } from 'react';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard'
import {Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route  exact path="/layout" component={Layout}/>
        <Route path="/"  exact  component={DashBoard}/>
      </div>
    );
  }
}
export default App;
