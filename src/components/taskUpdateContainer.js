import React, { Component } from "react";
import taskListInstance from "./../collections/taskList";
import PropTypes from "prop-types";

class TaskUpdateContainer extends Component {
  constructor() {
    super();
    this.updateTaskInput = React.createRef();
  }

  changeEditStatus(id) {
    taskListInstance.changeEditStatus(id);
  }

  handleKeyPress(event, id) {
    if (event.key === "Enter") {
      this.handleUpdateTask(id);
    }
  }

  handleUpdateTask(id) {
    const tasks = taskListInstance.tasks;
    const index = tasks.findIndex((element) => element.id === id);
    const task = tasks[index];
    const updatedTaskName = this.updateTaskInput.current.value.trim();
    this.updateTaskInput.current.value = "";
    if (updatedTaskName === task.name) {
      // No I18N
      alert("No changes found!");
    } else if (updatedTaskName === "") {
      // No I18N
      alert("Task name cannot be empty.");
    } else {
      taskListInstance.updateTask(id, updatedTaskName.trim());
    }
  }

  render() {
    const { task } = this.props;
    return (
      <div className="taskUpdateContainer">
        <li id={task.id}>
          <input
            onKeyPress={(event) => this.handleKeyPress(event, task.id)}
            ref={this.updateTaskInput}
            id="updateTaskField"
            type="text"
            placeholder="Enter new task or cancel"
            autoComplete="off"
          />
          <button
            onClick={() => this.handleUpdateTask(task.id)}
            id="saveButton"
            type="submit"
            value="Save"
            className="taskButtonClass edit"
          >
            <i className="taskIconClass fas fa-save"></i>
          </button>
          <button
            onClick={() => this.changeEditStatus(task.id)}
            id="saveButton"
            type="submit"
            value="Cancel"
            className="taskButtonClass cancel"
          >
            <i className="taskIconClass fas fa-times"></i>
          </button>
        </li>
      </div>
    );
  }
}

export default TaskUpdateContainer;

TaskUpdateContainer.propTypes = {
  task: PropTypes.any,
};
