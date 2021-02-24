import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props) {  //creates Hello Component

  return (
  <div>                         
  <h1>Hello {props.name}</h1>
  <h1>You are {props.age} years old</h1>
  </div>
  )                       // return generates a Virtual DOM node
  // added to actual DOM
}

export default Hello;           // exposes Hello funtion to other files that import from App.js