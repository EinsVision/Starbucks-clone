import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import MenuLink from './MenuLink';
import FindStore from './FindStore';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
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


export const Navigation = ({toggle}) => {
  const [showMenuCategories, setShowMeunCategories] = React.useState(false);
  return (
    <>
    {showMenuCategories ? (
      <motion.ul variants={variants}>
        <MenuLink
          link='Menu'
          goBackIcon 
          onClick={() => {
            setShowMeunCategories(false);
          }} width='60%' 
        />

        <MenuLink
          link='All Products'
          path='/menu' 
          onClick={() => {
            setShowMeunCategories(false);
            toggle();
          }} 
        />

        <MenuLink
          link='Featured'
          path='/menu/featured' 
          onClick={() => {
            setShowMeunCategories(false);
            toggle();
          }} 
        />

        <MenuLink
          link='Previous Orders'
          onClick={() => {
            setShowMeunCategories(false);
            toggle();
          }} 
        />

        <MenuLink
          link='Favorite Products'
          onClick={() => {
            setShowMeunCategories(false);
            toggle();
          }} 
        />
      </motion.ul>
    ) : (
      <motion.ul variants={variants}>
        <MenuLink
          link='Menu'
          icon
          onClick={() => setShowMeunCategories(true)}
        />
        <MenuLink
          link='Rewards'
        />
        <MenuLink
          link='Gift Cards'
        />
        <motion.hr variants={variants2}/>
        <motion.div className='navigation__buttons' variants={variants2}>

        </motion.div>

        <motion.div variants={variants2}>
          <FindStore />
        </motion.div>
      </motion.ul>
    )}
      
    </>
  )
  
};
