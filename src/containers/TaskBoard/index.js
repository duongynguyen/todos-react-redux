import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import { PropTypes } from "prop-types";

class TaskBoard extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={5}>
        {STATUSES.map((status, index) => (
          <TaskList status={status} listTask={listTask} key={index} />
        ))}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    let xhtml = null;
    xhtml = <TaskForm open={this.state.open} onClose={this.handleCloseForm} />;
    return xhtml;
  }

  handleCloseForm = () => {
    this.setState({ open: false });
  };

  openForm = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <Icon className={classes.icon}>add</Icon> Add new task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  taskActionCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func
  }),
  listTask: PropTypes.array
};

const mapStateToProps = state => {
  return {
    listTask: state.tasks.listTask
  }
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskBoard)
);
