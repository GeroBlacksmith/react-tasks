import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Task.css";
class Task extends Component {
  state = {
    task: this.props.task,
  };
  ProcessStyles() {
    return {
      backgroundColor: this.state.task.done ? "#888" : "#fff",
      textDecoration: this.state.task.done ? "line-through" : "none",
    };
  }

  handleCheck = () => {
    this.setState({
      task: {
        ...this.state.task,
        done: !this.state.task.done,
      },
    });
  };
  handleDelete = () => {
    this.props.DeleteTask(this.state.task.id);
  };
  render() {
    return (
      <div className="task" style={this.ProcessStyles()}>
        <p style={this.ProcessStyles()}>
          {this.state.task.title} - {this.state.task.id}
        </p>
        <input
          type="checkbox"
          checked={this.state.task.done}
          onChange={this.handleCheck}
        />
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
