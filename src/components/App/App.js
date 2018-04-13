import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import Map from '../Map/GoogleMap';
import Map from '../Map/GoogleMap';
import './App.css';

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TempoTrainer</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Map />
    </div>
  );

export default App;
