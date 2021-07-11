import React from 'react';
import axios from 'axios';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import BodyContent from '../Body/BodyContent';
import ExchangeCurrency from '../ExchangeCurrency/ExchangeCurrency';
import ButtonContainer from '../UIComponents/ButtonContainer/ButtonContainer';
 const styles={
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: '30px',
    textAlign: 'center'
}
class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            purchasePrice: '',
            sellPrice: ''
        }

    }


    componentDidMount() {
        axios.get('http://localhost:8080/purchaseprice')
            .then(response => {
                this.setState({ purchasePrice: response.data });
            })
        axios.get('http://localhost:8080/sellPrice')
            .then(response => {
                this.setState({ sellPrice: response.data });
            })
    }

    render() {

        const purchasePrice = this.state.purchasePrice;
        const sellPrice = this.state.sellPrice;

        return (

            <div className={classes.Wrapper}>
                <div style={styles}>  <Toolbar /> </div>
                <div className={classes.WrapperItem}>  <BodyContent /> </div>
                <div className={classes.WrapperItem}> <ExchangeCurrency valueData={purchasePrice} sellData={sellPrice} /></div>
                <div className={classes.WrapperItem}>  <ButtonContainer /> </div>
            </div>
        )

    }


}

export default Layout;