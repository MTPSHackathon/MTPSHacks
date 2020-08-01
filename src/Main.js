import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTPSLogo from "./MTPSLogo.png";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Backdrop from '@material-ui/core/Backdrop';
import Particle from "./Particle.js";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
    height: "100vh",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    paddingTop: "10%",
  },
  particle: {
    width: "100%",
    height: "100%",
  },
  heading: {
    position: "absolute",
    textAlign: "center",
    left: "50%",
    top: "200px",
    justify: "center",
    transform: 'translate(-50%, -50%)',
  },
  image: {
    alignItems: "center",
    width: "600px",
    position: "absolute",
    textAlign: "center",
    justify: "center",
    top: "650px",
    transform: 'translate(-50%, -50%)',
    paddingTop: "50px",
    paddingBottom: "30px",
  },
  menu: {
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "300px",
    color: "white",
    display: "flex",
    justify: "center",
    transform: 'translate(-50%, -50%)',
  },
  button: {
    color: "white",
    fontSize: "20px"
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Particle className={classes.particle} />
        <Grid className={classes.body}>
          <Grid item xs="12" spacing="1">
            <Typography variant="h1" className={classes.heading}>
              MTPSHacks
          </Typography>
          </Grid>
          <Grid item xs="12" className={classes.menu}>
            <ButtonGroup

              variant="text"
              aria-label="text primary button group"
            >
              <Button
                className={classes.button}
                to="/About"
                component={RouterLink}
              >
                About
            </Button>
              <Button
                className={classes.button}
                to="/Submissions"
                component={RouterLink}
              >
                Submissions
            </Button>
              <Button
                className={classes.button}
                to="/Sponsors"
                component={RouterLink}
              >
                Sponsors
            </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs="12">
            <img
              src={MTPSLogo}
              className={classes.image}
              alt="Logo"
              justify="center"
            />
          </Grid>

        </Grid>

      </div >
      <Footer />
    </div>
  );
}

export default Main;
