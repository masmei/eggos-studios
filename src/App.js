import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Services from './pages/Services';
import Team from './pages/Team';
import Stake from './pages/Stake';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/team' component={Team} />
          <Route path='/stake' component={Stake} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
