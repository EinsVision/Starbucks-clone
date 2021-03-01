import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';
import HomeScreen from './screens/HomeScreen';
import Header from './Header';
import { Footer } from './Footer';
import LoginScreen from './screens/LoginScreen';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
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
          
          <Route exact path='/account/signin'>
            {user ? <Redirect to='/menu' /> : <LoginScreen />}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
