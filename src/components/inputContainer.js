import React, { Component } from "react";
import taskListInstance from "./../collections/taskList";

class InputContainer extends Component {
  constructor() {
    super();
    this.taskInput = React.createRef();
    this.bindEventHandlers();
  }

  componentDidMount() {
    this.taskInput.current.focus();
  }

  bindEventHandlers() {
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleAddTask() {
    const taskName = this.taskInput.current.value.trim();
    if (taskName !== "") {
      taskListInstance.addTask(taskName);
    }
    this.taskInput.current.value = "";
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.handleAddTask();
    }
  }

  render() {
    return (
      <div className="inputContainer">
        <input
          onKeyPress={this.handleKeyPress}
          ref={this.taskInput}
          id="taskTextField"
          type="text"
          placeholder="Enter your task..."
          autoComplete="off"
        />
        <button
          onClick={this.handleAddTask}
          id="addButton"
          type="submit"
          value="Add"
        >
          <i className="addIcon fas fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default InputContainer;
