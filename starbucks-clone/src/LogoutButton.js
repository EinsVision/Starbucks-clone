import React from 'react';
import { auth } from './firebase';
import './LogoutButton.css';

function LogoutButton() {

  const logoutApp = () => {
    auth.signOut();
  };

  return (
    <button className='logoutButton' onClick={logoutApp}>
      Log Out
    </button>
  )
}

export default LogoutButton
