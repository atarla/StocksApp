import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <List />
      </div>
    );
  }
}

export default App;
