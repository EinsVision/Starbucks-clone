import React from 'react';
import { Link } from 'react-router-dom';
import './FindStore.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function FindStore() {
  return (
    <Link className='findStore'>
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindStore
