
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
           
           <Route path="/" element={<News />}/>
        </Routes>
        
      </Router>
    );
  }
}

export default App;
