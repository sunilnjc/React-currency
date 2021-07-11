import React from 'react';

import homeLogo from '../../assets/Images/home.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={homeLogo}  alt="Home"/>
        </div>
);

export default logo;