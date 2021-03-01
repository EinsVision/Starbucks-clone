import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpButton.css';

function SignUpButton() {
  return (
    <Link className='signUpButton' to='/account/create'>
      Join now
    </Link>
  )
}

export default SignUpButton
