import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class TaskItem extends Component {
  render() {
    const { status, tasks } = this.props;
    return tasks
      .filter(task => task.status === status.value)
      .map(task => (
        <Card style={{ marginBottom: "8px" }}>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h5">{task.title}</Typography>
              </Grid>
              <Grid item>{status.label}</Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button>A</Button>
          </CardActions>
        </Card>
      ));
  }
}

export default withStyles(styles)(TaskItem);
