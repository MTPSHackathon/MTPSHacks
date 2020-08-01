import React from "react";
import logo from "./logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTPSLogo from "./MTPSLogo.png";
import JANJ from "./janj.png";
import thinkKindness from "./thinkKindness.png";
import igniteStem from "./igniteSTEM.png";
import adp from "./adp.png";
import verizon from "./verizon.png";
import jj from "./jj.png";
import Submissions from "./Submissions.js";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    height: "100%",
    paddingTop: "10%",
    paddingBottom: "12%",
    paddingLeft: "30px",
    background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
    height: "100vh",
  },
  heading: {
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    width: "100px",
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  menu: {
    alignItems: "center",
    paddingLeft: "22%",
    color: "black",
  },
  button: {
    color: "black",
  },
  logo: {
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "80%",
  },
});

function Sponsors() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton to="/" component={RouterLink} className={classes.image}>
        <img
          src={MTPSLogo}
          alt="Logo"
          justify="center"
          className={classes.image}
        />
      </IconButton>
      <Grid>
        <Grid item xs="12" spacing="1">
          <Typography variant="h1" className={classes.heading}>
            Sponsors
          </Typography>
        </Grid>
        <Grid item xs="12">
          <Typography variant="h6">
            We could do have this hackathon without the support of our sponsors!
            Thank you!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid}
        alignItems="center"
        direction="row"
        justify="center"
        wrap="wrap"
      >
        <Grid item xs={4}>
          <img src={JANJ} className={classes.logo} />
        </Grid>
        <Grid item xs={4}>
          <img src={igniteStem} className={classes.logo} />
        </Grid>
        <Grid item xs={4}>
          <img src={thinkKindness} className={classes.logo} />
        </Grid>
        <Grid item xs={4}>
          <img src={adp} className={classes.logo} />
        </Grid>
        <Grid item xs={4}>
          <img src={verizon} className={classes.logo} />
        </Grid>
        <Grid item xs={4}>
          <img src={jj} className={classes.logo} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sponsors;
