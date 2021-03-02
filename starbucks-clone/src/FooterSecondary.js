import React from 'react';
import './FooterSecondary.css';
import FindStore from './FindStore';
import { Link } from 'react-router-dom';

function FooterSecondary({ alignItems, paddingLeft, flexDirection }) {
  return (
    <div 
      className='footerSecondary' 
      style={{alignItems, paddingLeft: `${paddingLeft*2}px`}}
    >
      <div 
        className="footerSecondary__container" 
        style={{ paddingLeft: `${paddingLeft}px`}}
      >
        <div className="footerSecondary__info">
          <div className="footerSecondary__left">
            <FindStore />
          </div>
          <div className="footerSecondary__right" style={{flexDirection}}>
            <Link>Responsiblity</Link>
            <Link>Web Accessibility</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
            <Link>Cookie Preferences</Link>
          </div>
        </div>
        <span className='footerSecondary_copyright'>® 2021 Startbucks</span>
      </div>  
    </div>
  )
}

export default FooterSecondary
