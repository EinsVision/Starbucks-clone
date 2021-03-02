import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Heading from '../Heading';
import './FeaturedScreen.css';
import Featured from '../Featured';

function FeaturedScreen() {
  return (
    <div className='featuredScreen'>
      <Fade>
        <Heading heading='STARBUCKS Coffee'/>
      </Fade>

      <Fade>
        <div className="featuredScreen__featured">
          <Featured
            title="MEATLESS MONDAYS AT STARBUCKS"
            info="Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.**"
            link="Order now"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"
            order="2"
            background="#1e3932"
            color="white"
            className="featured__hoverDark"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading='CREAMY, DREAMY COFFEE' />
      </Fade>

      <Fade>
        <div className='featuredScreen__discover'>
          <Featured
            title="NEW Kale & Portabella Mushroom Sous Vide Egg Bites"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png"
            info="With cage-free eggs and Monterey Jack cheese."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Featured
            title="Impossible™ Breakfast Sandwich*"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png"
            info="Featuring savory Impossible™ Sausage Made from Plants."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            order='2'
            className="info__hoverLight"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading='Enjoy Awesome Menu...' />
      </Fade>

    </div>
  )
}

export default FeaturedScreen
