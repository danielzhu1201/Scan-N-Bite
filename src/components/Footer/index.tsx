import React from "react";
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style.css'

import RestaurantIcon from '@material-ui/icons/Restaurant';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    color: '#6e501b',
    fontSize: '31px',
  }
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className='footer'>
      <Router>
        <NavLink to="/menu/catogory" className='foot__link'>
            <RestaurantIcon classes={{
              root: classes.root
            }}/>
            <p className='foot__text'>Menu</p>
        </NavLink>
        {/* TODO: need to fix the link */}
        <NavLink to="/menu/catogory" className='foot__link'>
          <ReceiptOutlinedIcon classes={{
              root: classes.root
            }}/>
          <p  className='foot__text'>Check</p>
        </NavLink>
        {/* TODO: need to fix the link */}
        <NavLink to="/menu/catogory" className='foot__link'>
          <PersonOutlineOutlinedIcon classes={{
              root: classes.root
            }}/>
          <p className='foot__text'>Profile</p>
        </NavLink>
      </Router>
    </footer>
  )
}

export default Footer;
