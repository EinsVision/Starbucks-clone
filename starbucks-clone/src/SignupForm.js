import React, { useState } from 'react';
import './SignupForm.css';
import { useForm } from "react-hook-form";
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FormSubmit from './FormSubmit';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { useHistory } from 'react-router-dom';

function SignupForm() {
  const { register, handleSubmit, errors } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = ({fName, lName, email, password }) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: fName
      }).then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: fName,
        }));
        history.replace('/menu');
      })
    })
    .then((error) => alert(error.message));
  }
  return (
    <div className='signupForm'>
      <div className="signupForm__container">
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className='signupForm__form'
        >
          <h4 className='signupForm__section'>Personal Information</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label='First name' 
              name='fName' 
              type='text' 
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='signupForm__input'
              inputRef={register({ required: true })}
            /> 
            {errors.fName && (
              <div className="signupForm__error">
                <CloseIcon fontSize='small' />
                <span>Enter your first name</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='signupForm__reportIcon'
                />
              </div>
            )}
          </div>

          <div className="signupForm__inputContainer">
            <TextField
              label='Last name' 
              name='lName' 
              type='text' 
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='signupForm__input'
              inputRef={register({ required: true })}
            /> 
            {errors.lName && (
              <div className="signupForm__error">
                <CloseIcon fontSize='small' />
                <span>Enter your last name</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='signupForm__reportIcon'
                />
              </div>
            )}
          </div>

          <h4 className='signupForm__section'>Account Security</h4>
          <div className="signupForm__inputContainer">
            <TextField
              label='E-mail' 
              name='email' 
              type='email' 
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='signupForm__input'
              inputRef={register({ required: true })}
            /> 
            {errors.email && (
              <div className="signupForm__error">
                <CloseIcon fontSize='small' />
                <span>Enter an email</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='signupForm__reportIcon'
                />
              </div>
            )}
          </div>

          <div className="signupForm__inputContainer">
            <TextField
              label='Password' 
              name='password' 
              type={passwordShown ? 'text' : 'password'}
              InputLabelProps={{ style: { color: 'rgba(0,0,0,0.56)'}}} 
              InputProps={{style: {fontWeight: '800' }}}
              className='signupForm__input'
              inputRef={register({ required: true })}
            /> 
            {passwordShown ? (
              <VisibilityIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className='signupForm__visibilityIcon'
              />
            ) : (
              <VisibilityOffIcon 
                onClick={() => setPasswordShown(!passwordShown)}
                className='signupForm__visibilityIcon'
              />
            )}

            {errors.password && (
              <div className="signupForm__error">
                <CloseIcon fontSize='small' />
                <span>Enter an password</span>
                <ReportProblemIcon
                  fontSize='small'
                  className='signupForm__reportIcon'
                />
              </div>
            )}
          </div>
          <h4 className='signupForm__rewards'>
            COLLECTION MORE STARS & EARN REWARDS
          </h4>
          <span className='signupForm__span'>
            Email is a great way to know about offers and what's new form Starbucks.
          </span>
          <FormSubmit name='Create account' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default SignupForm
