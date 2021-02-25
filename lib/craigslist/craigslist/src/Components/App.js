import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import Header from './Header'
import Results from './Results'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Results/>
      </header>
      
      <p>Washington, D.C. / all Washington, D.C. / For Sale / Furniture</p>
    </div>
  );
}

export default App;
