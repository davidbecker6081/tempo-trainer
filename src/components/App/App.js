import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MapView from '../../views/MapView/MapView';
import './App.css';

const App = () =>
  (
    <div className="App">
      <MapView />
    </div>
  );

export default App;
