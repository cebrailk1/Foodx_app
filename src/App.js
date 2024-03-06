import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import Signup from './signup';
import AboutUs from './Components/aboutus';
import Login from './Components/login';
import './App.css'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
