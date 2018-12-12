import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './components/Choise.js';
import Table from "./components/Table.js";

class App extends Component {
  render() {
    return (
        <div className="App" >
            <Table/>
        </div>
    );
  }
}

export default App;
