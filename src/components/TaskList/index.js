import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "../TaskItem";


class TaskList extends Component {
  render() {
    const { status, listTask } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          {status.label}
        </Box>
        <TaskItem tasks={listTask} status={status}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
