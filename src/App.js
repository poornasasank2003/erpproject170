import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Services from './components/pages/Staffdetails';
import Products from './components/pages/finance';
import SignUp from './components/pages/login';
import Help from './components/pages/Help';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
         
          <Route path='/products' component={Products} />
          <Route path='/help' component={Help} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
