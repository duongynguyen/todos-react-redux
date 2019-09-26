import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import styles from "./styles";

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

  handleFilter = e => {
    // const
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter}/>;
    return xhtml;
  }

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
        {this.renderSearchBox()}
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
  };
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
