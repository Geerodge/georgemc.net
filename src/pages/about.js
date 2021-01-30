import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from "styled-components";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Copyright from "./components/Copyright";
import Nav from './components/Nav';

const IndexStyles = styled.div`
    
`;

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#60ad5e',
        main: '#2e7d32',
        dark: '#005005',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#718792',
        main: '#455a64',
        dark: '#3c363c',
        contrastText: '#1c313a',
    },
  },
});

const useStyles = makeStyles((theme) => ({

}));

export default function Album() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>    
    <IndexStyles>
    <React.Fragment>
      <CssBaseline />
      <Nav />
      <main>

      </main>
      {/* Footer */}
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
      {/* End footer */}
    </React.Fragment>
    </IndexStyles>
    </ThemeProvider>
  );
}