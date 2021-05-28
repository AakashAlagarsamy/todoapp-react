import React, { Component } from "react";
import taskListInstance from "./../collections/taskList";
import PropTypes from "prop-types";

class TaskContainer extends Component {
  handleRemoveTask(id) {
    taskListInstance.removeTask(id);
  }

  changeEditStatus(id) {
    taskListInstance.changeEditStatus(id);
  }

  handleChangeTask(id) {
    taskListInstance.changeTask(id);
  }

  render() {
    const { task } = this.props;
    return (
      <div className="taskContainer">
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
            onClick={() => this.changeEditStatus(task.id)}
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
