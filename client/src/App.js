import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './components/ShoppingList';




class App extends Component {
  render() { //Renders main client page
    return (
        <div className="App"> 
          <AppNavbar/>
          <ShoppingList/>
        </div>
    );
  }
}

export default App;