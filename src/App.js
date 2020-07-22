import React from "react";

import "./App.css";
import Tasks from "./components/tasks/Tasks";
import tasks from "./samples/tasks.json";
import TaskForm from "./components/tasks/TaskForm";
class App extends React.Component {
  state = {
    tasks,
  };
  AddTask = (newTask) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: newTask.title,
          description: newTask.description,
          done: false,
          id: this.state.tasks.length + 1,
        },
      ],
    });
  };
  DeleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };
  render() {
    return (
      <div className="app">
        <h1 className="appTitle">Tasks Manager</h1>
        <TaskForm AddTask={this.AddTask} />
        <Tasks DeleteTask={this.DeleteTask} tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
