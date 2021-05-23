import React, { Component } from "react";
class Task extends Component {
  state = {};

  getCheckBoxClasses(completed) {
    return "taskCheckboxClass" + (completed ? "completed" : "");
  }

  render() {
    const { data, onHandleClick } = this.props;
    const task = data;
    return (
      <div>
        <li id={task.id}>
          <input
            type="checkbox"
            className="taskCheckboxClass"
            onChange={() => onHandleClick("change", task.id)}
            checked={task.completed ? "checked" : ""}
          ></input>
          <label
            className={
              task.completed ? "taskNameClass completed" : "taskNameClass"
            }
            onClick={() => onHandleClick("change", task.id)}
          >
            {task.name}
          </label>
          <br />
          <label className="dateStringClass">{task.dateTimeString}</label>
          <button
            className="taskButtonClass edit"
            onClick={() => onHandleClick("update", task.id)}
          >
            <i className="taskIconClass fas fa-pencil-alt"></i>
          </button>
          <button
            className="taskButtonClass remove"
            onClick={() => onHandleClick("remove", task.id)}
          >
            <i className="taskIconClass fas fa-trash"></i>
          </button>
        </li>
      </div>
    );
  }
}

export default Task;
