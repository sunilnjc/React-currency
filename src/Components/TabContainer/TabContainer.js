import React from 'react';
import Typography from "material-ui/Typography";


const styles = {
    padding: '14px 0px',
    margin: '10px 0px'
}
function TabContainer(props) {
    return (
        <Typography component="div" style={props.styles}>
            {props.children}
        </Typography>
    );
}
export default TabContainer;