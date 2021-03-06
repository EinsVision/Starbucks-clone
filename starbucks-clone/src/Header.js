import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { Example } from './Example';
import FindStore from './FindStore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import LogoutButton from './LogoutButton';

function Header({menuPage}) {
  const user = useSelector(selectUser);
  return (
    <div className={`header ${ menuPage && 'header__menuPage' }`}>
      <div className="header__left">
        <Link className='header__logo' to='/'>
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" 
            alt=""
          />
        </Link>

        <Link className='header__link' to='/menu'>
          MENU
        </Link>

        <Link className='header__link'>
          REWARDS
        </Link>

        <Link className='header__link'>
          GIFT CARDS
        </Link>

      </div>

      <div className="header__right">
        <Example />
        <FindStore />
        {!user ? (
          <>
            <Link to='/account/signin'>
              <SignInButton />
            </Link>

            <Link to='/account/create'>
              <SignUpButton />
            </Link>
          </>
        ): (
          <div className="header__logout">
            {menuPage ? <LogoutButton /> : <Link to='/menu'>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;

