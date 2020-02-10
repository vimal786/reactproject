import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './components/Home';
import RestauranstList from './components/RestauranstList';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantDetail from './components/RestaurantDetail';
import Login from './components/Login';
import NavBarMenu from './components/NavbarMenu';
import Protected from './components/Protected';
import Logout from './components/Logout'


function App() {
  return (
    <div className="App">
      <Router>

    
         <Route path="/login"
             render={ props=>(
              <Login {...props} />)}>
         </Route> 
      <Route path="/logout"> <Logout /></Route>
     
      <Protected exact  path="/search" component={RestaurantSearch} />
      <Protected  exact path="/detail" component={RestaurantDetail} />
      <Protected  exact path="/create" component={RestaurantCreate} />
      <Protected  exact path="/list" component={RestauranstList} />
      <Protected  exact path="/update/:id" component={RestaurantUpdate} />
     
      <Protected exact path="/" component={Home} />
      
      </Router>
    </div>
  );
}

export default App;
