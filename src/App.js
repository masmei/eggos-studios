import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Roadmap from './pages/Roadmap';
import Services from './pages/Services';
import Team from './pages/Team';
import Faq from './pages/Faq';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/roadmap' component={Roadmap} />
          <Route path='/services' component={Services} />
          <Route path='/team' component={Team} />
          <Route path='/faq' component={Faq} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
