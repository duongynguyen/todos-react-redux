import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";

class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={5}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            {status.label}
          </Grid>
        ))}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Icon className={classes.icon}>add</Icon> Add new task
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
