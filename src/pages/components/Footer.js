import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Copyright from "../components/Copyright";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
}));

function Footer(){
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Find me elsewhere...<br /> 
          <a href="https://github.com/Geerodge" target="_blank" rel="noreferrer">
            <GitHubIcon color="action" />
          </a> 
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon color="action" />
          </a>
          <a href="https://twitter.com/geerodge" target="_blank" rel="noreferrer">
            <TwitterIcon color="action" />
          </a>  
          <a href="mailto:geerodge@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon color="action" />
          </a> 
        </Typography>
        <Copyright />
        </footer>
    )
}

export default Footer;