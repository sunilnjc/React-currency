import React from 'react';
import classes from './BodyContent.css';
import getSymbolFromCurrency from 'currency-symbol-map'

const styles = {
  fontSize: '42px',
  color: "#ff2c0e",
  position: 'relative',
  top: '14px'
}

const styles1 = {
  fontSize: '18px',
  position: 'relative',
  top: '12px'
}

const currency = getSymbolFromCurrency('JPY');

const BodyContent = () => (

  <div className={classes.gridContainer}>
    <div className={classes.gridItem}>Bitcoin</div>
    <div className={classes.gridItem1}>
      <div className={classes.iconData}>
        <i className="material-icons" style={styles}>monetization_on</i>
        <p style={styles1}> BTC01.234567/{currency}9,876</p>
      </div>
    </div>
  </div>

);

export default BodyContent;