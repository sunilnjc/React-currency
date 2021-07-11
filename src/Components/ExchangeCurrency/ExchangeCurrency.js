import React from 'react';
import classes from './ExchangeCurrency.css';


const exchangeCurrency = (props) => (

   <div className={classes.ExchangeCurrencyContainer}>
  <div className={classes.ExchangeCurrencyItem}>Purchase Price(BTC/JPY)</div>
  <div className={classes.ExchangeCurrencyItem}>Sell Price(BTC/JPY)</div>
  <div className={classes.ExchangeCurrencyItem1}>{props.valueData}</div>  
  <div className={classes.ExchangeCurrencyItem1}>{props.sellData}</div>  
</div>

);

export default exchangeCurrency;