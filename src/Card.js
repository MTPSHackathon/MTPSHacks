import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    transitionDuration: "0.3s",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    overflow: "hidden",
    height: "300px"
  },
  button: {
    background: "blue",
  }
}));
const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        elevation={5}
        margin={10}
        transitionDuration="0.3s"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        className={classes.root}
      >
        <div style={{ maxHeight: 300, overflow: "auto" }}>
          <CardHeader title={props.projectName} subheader={props.memberNames} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </div>
        <Button variant="text" color="primary" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {props.projectName}
          </DialogTitle>
          <DialogContent dividers>
            <Typography>What inspired your project idea?</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.inspiration}
              <br />
              <br />
            </Typography>
            <Typography>What challenges did your team run into?</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.challenges}
              <br />
              <br />
            </Typography>
            <Typography>What accompmlishments are you proud of?</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.accomplishments}
              <br />
              <br />
            </Typography>
            <Typography>What did you learn?</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.learn}
              <br />
              <br />
            </Typography>
            <Typography>
              What are the next steps for you and your team?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.nextSteps}
              <br />
              <br />
            </Typography>
            <Typography>Links</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Link href={props.link1}>{props.link1}</Link>
              <br />
              <Link href={props.link2}>{props.link2}</Link>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div >
  );
}
