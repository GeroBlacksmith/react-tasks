import React, { Component } from "react";
import PropTypes from "prop-types";

import Task from "./Task";
import "./Tasks.css";

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        {this.props.tasks.map((task) => (
          <Task DeleteTask={this.props.DeleteTask} task={task} key={task.id} />
        ))}
      </div>
    );
  }
}
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};
export default Tasks;
