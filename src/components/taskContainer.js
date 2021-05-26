import React, { Component } from "react";
import taskListInstance from "./../collections/taskList";
import PropTypes from "prop-types";

class TaskContainer extends Component {
  constructor() {
    super();
    this.taskInput = React.createRef();
  }

  handleRemoveTask(id) {
    taskListInstance.removeTask(id);
  }

  handleUpdateTask(id) {
    const tasks = taskListInstance.tasks;
    const index = tasks.findIndex((element) => element.id === id);
    const task = tasks[index];
    // No I18N
    let updatedTaskName = prompt("Enter the updated task..", task.name);
    if (updatedTaskName === null) {
      // No I18N
      alert("Update operation cancelled!");
    } else {
      updatedTaskName = updatedTaskName.trim();
      if (task.name === updatedTaskName) {
        // No I18N
        alert("No changes found!");
      } else if (updatedTaskName === "") {
        // No I18N
        alert("Task name cannot be empty.");
      } else {
        taskListInstance.updateTask(id, updatedTaskName.trim());
      }
    }
  }

  handleChangeTask(id) {
    taskListInstance.changeTask(id);
  }

  render() {
    const { task } = this.props;
    return (
      <div>
        <li id={task.id}>
          <input
            type="checkbox"
            className="taskCheckboxClass"
            onChange={() => this.handleChangeTask(task.id)}
            checked={task.completed ? "checked" : ""}
          ></input>
          <label
            className={
              task.completed ? "taskNameClass completed" : "taskNameClass"
            }
            onClick={() => this.handleChangeTask(task.id)}
          >
            {task.name}
          </label>
          <br />
          <label className="dateStringClass">{task.timeString}</label>
          <button
            className="taskButtonClass edit"
            onClick={() => this.handleUpdateTask(task.id)}
          >
            <i className="taskIconClass fas fa-pencil-alt"></i>
          </button>
          <button
            className="taskButtonClass remove"
            onClick={() => this.handleRemoveTask(task.id)}
          >
            <i className="taskIconClass fas fa-trash"></i>
          </button>
        </li>
      </div>
    );
  }
}

export default TaskContainer;

TaskContainer.propTypes = {
  task: PropTypes.any,
};
