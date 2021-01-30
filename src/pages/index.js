import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'gatsby';
import Nav from "./components/Nav";
import Footer from './components/Footer';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>    
    <IndexStyles>
    <React.Fragment>
      <CssBaseline />
        <Nav />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Hello, I’m George
            </Typography>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                Thanks for popping by...
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                I'm a web developer, SEO specialist and problem solver. I love helping businesses grow, optimising and automating mundane processeses, researching solutions and meeting new people.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/about">
                      About
                    </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Curriculum vitae
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
    </IndexStyles>
    </ThemeProvider>
  );
}