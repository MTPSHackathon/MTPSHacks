import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",

        width: "100%",
    },
    text: {
        fontColor: "black",
        textAlign: "center",
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.text}>
                Website Created by JA Interns Serena Zeng and Ria Vora
            </Typography>

        </div>
    );
}

export default Footer;