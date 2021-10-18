import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home/Home';
import NavBar from './utility/NavBar/NavBar';
// Routes:
// /cities/recommended
// /cities/:feature
// /city/:cityName
// /venues/recommended
// /venues/superHost
// /seach/:searchTerm
// /venue/:venueId
// /payment/stripe

class App extends Component{

  render(){
    return(
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
      </Router>
    )
  }

}

export default App;
