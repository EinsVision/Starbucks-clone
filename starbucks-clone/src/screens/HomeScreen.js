import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import './HomeScreen.css';


function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Fade>
        <div className="homeScreen__top">
          <h4>We're working hard to put the health and well-being of our partners and customers first in all that we do. <Link>Learn more</Link></h4>
        </div>
      </Fade>

      <Fade>
        <div className="homeScreen__button">
          <div className="homeScreen__buttonLeft">
            <h4>Investing in our communities</h4>
            <p>
              The Starbucks Foundation awarded grants to over 400 noprofits 
              serving communities of color. Recipients were nominated by 
              Starbucks partners (employees).
            </p>
            <button>Learn more</button>
          </div>

          <div className="homeScreen__buttonRight">
            <img 
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69046.jpg" 
              alt=""
            />
          </div>
        </div>
      </Fade>

      <Fade>
        <Heading heading='TODAY IS YOURS' />
      </Fade>
    </div>
  )
}

export default HomeScreen;
