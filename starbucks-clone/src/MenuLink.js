import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const  MenuLink = ({link, path, icon, goBackIcon, onClick, width}) => {
  return (
    <div>
      <Link to={path}>
        <motion.li 
          style={{ width}} 
          onClick={onClick} 
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {goBackIcon && <ChevronLeftIcon fontSize='large'/> }
          {link}
          {icon && <ChevronRightIcon fontSize='large'/>}
        </motion.li>
      </Link>
    </div>
  )
}

export default MenuLink
