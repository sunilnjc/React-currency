import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Home from "@material-ui/icons/Home";
import { Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";
class Toolbar extends Component {
    goToHomePage = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <header className={classes.Toolbar}>
                <div className={classes.ToolbarItem}>
                    <div className={classes.Icon}>
                        <Home onClick={this.goToHomePage} />
                    </div>
                    <div className={classes.Text}>
                        <h4 >FBaaS Bank Currency Trade</h4>
                    </div>
                </div>
            </header>

        )
    };
}
export default withRouter(Toolbar);
