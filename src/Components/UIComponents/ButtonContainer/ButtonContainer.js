import React from 'react';
import classes from './ButtonContainer.css';
import Button from 'material-ui/Button';
import Input, { InputLabel} from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import getSymbolFromCurrency from 'currency-symbol-map';


import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

const styles = {
    root: {
        backgroundColor: 'red',
    },
    purchase: {
        width: '80%',
        backgroundColor: '#ff4081',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    },
    sale: {
        width: '80%',
        backgroundColor: '#3f51b5',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: 'none',
        color: 'rgb(12, 1, 1)',
        width: '100%',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    },
    ButtonControl: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    dialogContent: {
        backgroundColor: 'floralwhite'
    },
    dialogContent1: {
        backgroundColor: '#59800075'
    }
 
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const currency = getSymbolFromCurrency('JPY');
const currency1 = getSymbolFromCurrency('USD');
const priceCell = '1,090, 272.00';
const currencyRate = 1090272;

class buttonContainer extends React.Component {

    state = {
        open: false,
        vertical: null,
        horizontal: null,
        adornmentAmount: 0
    };

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    clearQuantityHandler = () => {
        this.setState({ adornmentAmount: 0 });
    }

    onChangeInputHandler = (e) => {
        this.setState({ adornmentAmount: Number.parseInt(e.target.value, 10) })
    }


    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { adornmentAmount: prevState.adornmentAmount + value } })
                break;
            case 'dec':
                this.setState((prevState) => { return { adornmentAmount: prevState.adornmentAmount + value } })
                break;
            case 'add':
                this.setState((prevState) => { return { adornmentAmount: prevState.adornmentAmount + value } })
                break;
        }
    }

   
    

    render() {

    const priceExpect = currencyRate * this.state.adornmentAmount;

        return (
            <div>
                <div >
                    <FormControl fullWidth >
                        <InputLabel htmlFor="adornmentAmount"  >Quantity</InputLabel>
                        <Input value={this.state.adornmentAmount}
                            onChange={this.onChangeInputHandler}
                            type="number"
                        />
                    </FormControl>
                </div>

                <div className={classes.price_expect}>Expected Price {currency} {priceExpect.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</div>
                <div className={classes.GridContainer}>
                    <div className={classes.GridItem}>
                        <Button variant="raised" style={styles.button} onClick={() => this.counterChangedHandler('inc', 1)} >+1</Button>
                    </div>
                    <div className={classes.GridItem}>
                        <Button variant="raised" style={styles.button} onClick={() => this.counterChangedHandler('dec', 0.1)}>+0.1</Button>
                    </div>
                    <div className={classes.GridItem}>
                        <Button variant="raised" style={styles.button} onClick={() => this.counterChangedHandler('add', 0.01)}>+0.01</Button>
                    </div>
                    <div className={classes.GridItem}>
                        <Button variant="raised" style={styles.button} onClick={this.clearQuantityHandler}>Clear</Button>
                    </div>
                </div>

                <div className={classes.Tradecontainer}>
                    <div className={classes.TradeItem}>
                        <Button variant="raised" style={styles.purchase}
                            onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })}
                        >
                            Purchase
                        </Button>
                    </div>

                    <div className={classes.TradeItem}>
                        <Button variant="raised" style={styles.sale}
                            onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })}
                        >
                            Sale
                        </Button>
                    </div>

                    {
                        this.state.adornmentAmount === 0 ?
                            <div>
                                <Snackbar
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    transition={this.state.transition}
                                    SnackbarContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id">Please enter the Quantity</span>}
                                />
                            </div> :
                            <div>
                                <Dialog
                                    open={this.state.open}
                                    transition={Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle id="alert-dialog-slide-title" style={styles.dialogContent1}>
                                        {"Purchase Order"}
                                    </DialogTitle>
                                    <div style={styles.dialogContent}>
                                    <DialogContent>
                                            <div className={classes.grid_description}>Quantity</div> <br/>
                                            <div className={classes.grid_value}>{this.state.adornmentAmount}USD</div> <br/>
                                            <div className={classes.grid_description}>Price</div> <br />
                                            <div className={classes.grid_value}>{currency1}{priceCell}</div> <br />
                                            <div className={classes.grid_description}>Total</div> <br />
                                            <div className={classes.grid_value}>{currency}{priceExpect.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</div> <br />
                                            <div className={classes.grid_commission}>Transaction fee {currency1}0.00</div> <br />
                                            <div className={classes.grid_confirm}>{this.state.adornmentAmount}USD of purchase, Would you like to place an order?</div> <br />
                                    </DialogContent>
                                    </div>
                                    <div className={classes.ConfirmContainer} >
                                    <DialogActions>
                                            <div className={classes.ConfirmItem} >
                                        <Button onClick={this.handleClose} color="primary">
                                            Confirm Order
                                         </Button>
                                         </div>
                                            <div className={classes.ConfirmItem1} >
                                        <Button onClick={this.handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        </div>
                                       
                                    </DialogActions>
                                    </div>
                                </Dialog>
                            </div>
                    }
                </div>
            </div>
        )
    };
}

export default buttonContainer;

