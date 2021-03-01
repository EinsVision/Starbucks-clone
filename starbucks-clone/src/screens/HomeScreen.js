import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Featured from '../Featured';
import Heading from '../Heading';
import Info from '../Info';
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
        <div className="homeScreen__botton">
          <div className="homeScreen__bottonLeft">
            <h4>Investing in our communities</h4>
            <p>
              The Starbucks Foundation awarded grants to over 400 noprofits 
              serving communities of color. Recipients were nominated by 
              Starbucks partners (employees).
            </p>
            <button className='homeScreen__bottonLeftButton'>Learn more</button>
          </div>

          <div className="homeScreen__bottonRight">
            <img 
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69046.jpg" 
              alt=""
            />
          </div>
        </div>
      </Fade>

      <Fade>
        <Heading heading='MAKE TIME FOR ME TIME' />
      </Fade>

      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title='OH SO LUSH'
            info='Enjoy velvety-smooth Nitro Cold Brew your way—black or with house-made Sweet Cream for under 75 calories in a grande.'
            image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68963.png' 
            background='#f0ebe0'
            color='#1e3932'
            className='featured__hoverLight'
          />
        </Fade>
        
        <Fade>
          <Featured
            title='UP AND AT ’EM'
            info='Conquer it all with a Bacon, Sausage & Egg Wrap or Bacon, Gouda & Egg Sandwich, featuring cage-free eggs.'
            image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68965.png' 
            background='#f0ebe0'
            color='#1e3932'
            className='featured__hoverLight'
          />
        </Fade>
      </div>

      <Fade>
        <Heading heading='MORE TO DISCOVER' />
      </Fade>

      <Fade>
        <div className="homeScreen__discover">
          <Info
            title='STARBUCKS RESERVE® COFFEE'
            info='Now for a limited time, you can explore these two incredible offerings: Ethiopia Yirgacheffe® Chelelektu and Guatemala Huehuetenango.'
            image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68960.png' 
            background='#f0ebe0'
            color='#1e3932'
            className='featured__hoverLight'
          />
          <Info
            title='Earning 4,500 Bonus Stars is Super Starifying'
            info='$0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire—an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.**'
            image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-63859.jpg' 
            background='#f0ebe0'
            color='#1e3932'
            className='featured__hoverLight'
          />
        </div>
      </Fade>
    </div>
  )
}

export default HomeScreen;
