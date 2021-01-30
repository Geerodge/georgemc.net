import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
}));

function Nav(){
    const classes = useStyles();
    return (
        <AppBar position="relative">
        <Toolbar color="primary">
          <LanguageIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            George McEntegart
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Nav;