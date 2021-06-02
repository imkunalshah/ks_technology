import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/main';
import Landingpage from './components/landingpage';

class App extends Component {
  render(){
    return (
    <div className="Home">
      <Navbar/>
      <Main/>
    </div>
  );
  }
  
}

export default App;
