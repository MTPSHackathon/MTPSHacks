import React, { Component } from "react";
import SubmissionCard from "./Card.js";
import data from "./csvjson.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, withTheme, Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { borders } from "@material-ui/system";

function SubmissionList() {
  const useStyles = makeStyles((Theme) => ({
    grid: {
      width: "100%",
      margin: "0px",
    },
    root: {
      background: "white",
      opacity: "70%",
      fontSize: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "45px",
      borderRadius: "5px",
    },
    searchbar: {
      padding: "0.2%",
      background: "white",
      opacity: "70%",
      display: "flex",
      flexDirection: "row",
      width: "500px",
      justify: "center",
      height: "45px",
      borderRadius: "5px",
      position: "absolute",
      left: "50%",
      transform: "translate(-50% , -50%)",
      paddingLeft: "10px",
      top: "300px",
    },
    searchFormat: {
      paddingTop: "3%",
      paddingBottom: "3%",
    },
  }));

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = data.filter((data) =>
      data.memberNames.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <Grid item xs="12" className={classes.searchFormat}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.searchbar}
            type="text"
            fullWidth
            placeholder="SEARCH FOR A STUDENT'S NAME"
            value={searchTerm}
            onChange={handleChange}
            margin="dense"
            defaultValue="Naked input"
            inputProps={{ style: { fontSize: 20 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
          />
        </form>
      </Grid>
      <Grid
        container
        spacing={4}
        className={classes.grid}
        alignItems="stretch"
        direction="row"
        justify="center"
      >
        {searchResults.map((data) => {
          return (
            <Grid item xs={3}>
              <SubmissionCard
                key={data.email}
                projectName={data.teamName}
                memberNames={data.memberNames}
                description={data.description}
                inspiration={data.inspiration}
                challenges={data.challenge}
                accomplishments={data.accomplishments}
                learn={data.learn}
                nextSteps={data.nextSteps}
                link1={data.link1}
                link2={data.link2}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default SubmissionList;
