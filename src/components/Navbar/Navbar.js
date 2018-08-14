import React, { Component } from 'react';
// import Employee from '../Employee/Employee';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class HeadingBar extends Component{
    render () {
        const { classes } = this.props;
        return (
                <AppBar position="static" color='primary' className={classes.bar}>
                    <Toolbar>
                    <Typography variant="title" color="inherit">
                        Movie-Store
                    </Typography>
                    </Toolbar>
                </AppBar>
        ) ;
    }
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bar:{
        marginBottom:50,
        // background: 'rgba(6, 18, 26, 0.99),'
        // background: 'rgba(225, 225, 225, 0.9)',
        // background: blueGrey[500],
        background: 'black',
    }
  });

  export default withStyles(styles)(HeadingBar);