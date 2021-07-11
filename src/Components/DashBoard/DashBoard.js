import React from 'react'
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Home from "@material-ui/icons/Home";
import Card, { CardContent } from "material-ui/Card";
import Tabs, { Tab } from 'material-ui/Tabs';
import TabContainer from '../TabContainer/TabContainer'
import Button from "material-ui/Button";
import { Link } from 'react-router-dom'
import axios from 'axios';
import classes from './DashBoard.css'
import { Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import './DashBoard.css'
const styles = {
    card: {
        backgroundColor: 'rgba(75, 96, 210, 0.65)',
        padding: '0px'
    },
    cardheading: {
        textAlign: 'left',
        color: 'rgb(255, 255, 255)',
        paddingBottom: '0px',
        paddingLeft: '36px',
        fontSize: '19px',
    },
    yen: {
        textAlign: "left",
        color: 'rgb(255, 255, 255)',
        paddingLeft: '36px'
    },
    button: {
        color: 'red',
        backGroundColor: "primary"
    },
    arrowStyles: {
        position: 'relative',
        bottom: '14px'
    },
    arrowStyles1: {
        position: 'relative',
        top: '18px'
    },
    gridItemBTC: {
        fontWeight: 'bold'
    },
    fontSize1: {
        fontWeight: 'bold',
        fontSize: '15px'
    },
    fontSize2: {
        fontSize: '20px'
    },
    marginSet: {
        margin: '10px 0px'
    },
    currencyButton: {
        width: '46px',
        height: '48px'
    }
}

class DashBoard extends React.Component {

    state = {
        value: 0,
        totalAssert: '',
        dailyProfitLoss: ''
    };


    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });

    };
    navigateLayout = () => {
        this.props.history.push('/layout')
    }

    componentDidMount() {
        axios.get('http://localhost:8080/totalasserts')
            .then(response => {
                this.setState({ totalAssert: response.data });
            })
        axios.get('http://localhost:8080/profitandloss')
            .then(response => {
                this.setState({ dailyProfitLoss: response.data });
            })
    }

    render() {
        const { value } = this.state;
        return (
            <div className={classes.toolBar}>
                <AppBar position="static" >
                    <Toolbar >
                        <IconButton color="inherit">
                            <Home />
                        </IconButton>

                        <Typography variant="title" color="inherit">FBaas Bank home</Typography>
                    </Toolbar>
                </AppBar>
                <div >
                    <Card style={styles.card} >
                        <CardContent style={styles.card}>
                            <Typography style={styles.cardheading}>Total Asserts</Typography>
                            <div className={classes.alignment}>
                                <Typography style={styles.yen} >‎¥ {this.state.totalAssert}</Typography>
                                <i className="material-icons" onClick={this.navigateLayout} style={styles.arrowStyles}>chevron_right</i>
                            </div>
                        </CardContent>

                    </Card>
                </div>
                <div >
                    <Card style={styles.card} >

                        <CardContent style={styles.card}>
                            <Typography style={styles.cardheading}>Daily Profit/Loss</Typography>
                            <div className={classes.alignment}>
                                <Typography style={styles.yen} >‎¥ {this.state.dailyProfitLoss}</Typography>
                                <i className="material-icons" style={styles.arrowStyles}>chevron_right</i>
                            </div>
                        </CardContent>

                    </Card>
                </div >
                <div className={classes.beforeGride}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                        >
                            <Tab label="Sales office" />
                            <Tab label="Exchanges" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>
                        <div style={styles.marginSet}>
                            <div className={classes.gridContainer}>
                                <div className={classes.gridItem}>
                                    <Button variant="fab" color="secondary" >
                                        <i className="material-icons "    >attach_money</i>
                                    </Button>
                                </div>
                                <div className={classes.gridItem0}> <a style={styles.fontSize1}>BTC/JPY<br /><br /></a> <a style={styles.fontSize2}>20,000</a></div>
                                <div className={classes.gridItem1}>
                                    <a>
                                        <Button variant="fab" color="secondary" >
                                            <i className="material-icons">trending_up</i>
                                        </Button>
                                        <br />+5.1%
                                    </a>
                                    <i className="material-icons" style={styles.arrowStyles1}>chevron_right</i>
                                </div>
                            </div>
                            <div className={classes.gridContainer} style={styles.hLine}>
                                <div className={classes.gridItem}>
                                    <Button variant="fab" color="secondary" >
                                        <i className="material-icons">local_florist</i>
                                    </Button>
                                </div>
                                <div className={classes.gridItem0}> <a style={styles.fontSize1}>BTC/JPY<br /><br /></a> <a style={styles.fontSize2}>20,000</a></div>
                                <div className={classes.gridItem1}>
                                    <a>
                                        <Button variant="fab" color="primary" >
                                            <i className="material-icons">trending_down</i>
                                        </Button>
                                        <br />-3.1%
                                    </a>
                                    <i className="material-icons" style={styles.arrowStyles1}>chevron_right</i>
                                </div>
                            </div>
                            <div className={classes.gridContainer} style={styles.hLine}>
                                <div className={classes.gridItem}>
                                    <Button variant="fab" color="secondary">
                                        <i className="material-icons">restaurant</i>
                                    </Button>
                                </div>
                                <div className={classes.gridItem0}> <a style={styles.fontSize1}>BTC/JPY<br /><br /></a> <a style={styles.fontSize2}>20,000</a></div>
                                <div className={classes.gridItem1}>
                                    <a>
                                        <Button variant="fab" className='tabcontainer_button tabcontain'>
                                            <i className="material-icons">trending_flat</i>
                                        </Button>
                                        <br />0%
                                    </a>
                                    <i className="material-icons" style={styles.arrowStyles1}>chevron_right</i>
                                </div>
                            </div>
                        </div>
                    </TabContainer>}
                    {value === 1 && <TabContainer>Item Two!!</TabContainer>}

                </div>
                {/* {<Route   path="/person"  component={Layout} />} */}
            </div>
        );
    }
}
export default DashBoard;


