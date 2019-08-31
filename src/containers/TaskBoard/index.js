import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";

const listTask = [
  {
    id: 1,
    title: "Read book",
    status: 0,
    description: "Read book des"
  },
  {
    id: 2,
    title: "Coding",
    status: 1,
    description: "Coding des"
  },
  {
    id: 3,
    title: "Play game",
    status: 2,
    description: "Play game des"
  }
];
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={5}>
        {STATUSES.map((status, index) => <TaskList status={status} listTask={listTask} key={index}/>)}
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
