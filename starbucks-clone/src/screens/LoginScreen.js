import React from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className='loginScreen'>
      <div className="loginScreen__left">
        <Link to='/'>
        <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" 
            alt=""
          />
        </Link>
        <div className="loginScreen__info">
          <h1>Sign in or create an account</h1>
        </div>
      </div>

      <div className="loginScreen__right">
        <form></form>
      </div>
    </div>
  )
}

export default LoginScreen
