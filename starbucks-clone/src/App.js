import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';
import HomeScreen from './screens/HomeScreen';
import Header from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="app">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />

            <HomeScreen />

            <Fade />
              <Footer />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
