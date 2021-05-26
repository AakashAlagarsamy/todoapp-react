import React, { Component } from "react";
import TaskContainer from "./taskContainer";
import taskListInstance from "./../collections/taskList";
import PropTypes from "prop-types";

class TaskListContainer extends Component {
  getPendingTasks() {
    const pendingTasks = taskListInstance.tasks.filter(
      (task) => task.completed === false
    );
    return pendingTasks;
  }

  getCompletedTasks() {
    const completedTasks = taskListInstance.tasks.filter(
      (task) => task.completed === true
    );
    return completedTasks;
  }

  render() {
    const { title, titleId, taskListType } = this.props;
    const taskList =
      taskListType === "pendingTasks"
        ? this.getPendingTasks()
        : this.getCompletedTasks();
    return (
      <div className="split">
        <label id={titleId}>{title}</label>
        <ul>
          {taskList.map((item) => (
            <TaskContainer key={item.id} task={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskListContainer;

TaskListContainer.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
  taskListType: PropTypes.string,
};
