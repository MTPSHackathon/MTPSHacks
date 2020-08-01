import React from 'react';
import logo from './logo.svg';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MTPSLogo from './MTPSLogo.png';
import Submissions from './Submissions.js';
import { Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        height: '800',
        paddingTop: "10%",
        paddingBottom: "40%",
    },
    heading: {
        textAlign: 'center',
    },
    image: {
        alignItems: 'center',
        width: '100px',
        position: 'absolute',
        top: '20px',
        left: '20px',
    },
    button: {
        color: 'white',
    },
    text: {
        width: "100%",
    }
});

function About() {
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
        <Grid
          container
          spacing={4}
          className={classes.grid}
          alignItems="stretch"
          direction="row"
          justify="center"
        >
          <Grid item xs={12} spacing="1">
            <Typography variant="h1" className={classes.heading}>
              About
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.text}>
            <Typography variant="h6">
              MTPSHacks provides Marlboro's middle school students time and
              space to collaborate with peers to creatively solve problems using
              computer programming skills.
              <br />
              <br />
              A hackathon is when teams of students work together toward
              creating a unique or innovative project using computer programming
              skills. Hackathons are known to increase coding knowledge and
              foster collaborative problem-solving skills as students build
              something useful to make the world a better place.
              <br />
              <br />
              Prior to school closures due to COVID-19, Marlboro Township Public
              Schools planned for an after-school hackathon for middle school
              students in collaboration with Junior Achievement of NJ. Rather
              than cancel because of COVID-19, the program was redesigned to
              take place virtually so students could engage in a creative,
              collaborative project with their peers under the guidance of
              teachers, high school student mentors, and industry professionals.
              Under Morgan Gross’ leadership, all stakeholders came together to
              revise the program to foster creativity and innovation at a time
              when students needed these unique learning experiences the most.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
}

export default About;