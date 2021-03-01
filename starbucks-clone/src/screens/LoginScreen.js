import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';
import { useForm } from "react-hook-form";
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function LoginScreen() {

  const { register, handleSubmit, watch, errors } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const onSubmit = ({ email, password }) => {

  };
  
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginScreen__inputContainer">
            <TextField
              label='Standard' 
              name='email' 
              type='email' 
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='loginScreen__input'
              inputRef={register({ required: true })}
            /> 
            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize='small' />
                <span>Enter an email</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='loginScreen__reportIcon'
                />
              </div>
            )}
          </div>

          <div className="loginScreen__inputContainer">
            <TextField
              label='Standard' 
              name='password' 
              type='password' 
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='loginScreen__input'
              inputRef={register({ required: true })}
            /> 
            {passwordShown ? (
              <VisibilityIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className='loginScreen__visibilityIcon'
              />
            ) : (
              <VisibilityOffIcon 
                onClick={() => setPasswordShown(!passwordShown)}
                className='loginScreen__visibilityIcon'
              />
            )}

            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize='small' />
                <span>Enter an password</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='loginScreen__reportIcon'
                />
              </div>
            )}
          </div>
        </form>
        <div className="loginScreen__resetLinks">
          <Link>Forget your username?</Link>
          <Link>Forget your password?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
