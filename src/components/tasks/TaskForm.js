import React, { Component } from "react";
import "./TaskForm.css";

class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTask(this.state);
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form className="taskForm">
        <div>
          <input
            name="title"
            type="text"
            placeholder="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Write a description"
            onChange={this.onChange}
            value={this.state.description}
          ></textarea>
        </div>
        <div>
          <button type="submit" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default TaskForm;
