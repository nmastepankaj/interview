import React, { Component } from 'react'
import './App.css';
import Heading from './components/Heading';
import Switchable from './components/Switchable';

export default class App extends Component {

  

  render() {
    return (
      <div className='main_body'>
        <Heading/>
        <Switchable/>
      </div>
    )
  }
}
