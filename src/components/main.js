import React, { Component } from "react";
import { getFormattedDateTime } from "./../utils/utils";
import TaskList from "./taskList";
class Main extends Component {
  state = {
    counter: 0,
    tasks: [],
  };

  constructor() {
    super();
    this.taskInput = React.createRef();
    this.bindEventHandlers();
  }

  componentDidMount() {
    this.setState({}, this.taskInput.current.focus());
  }

  bindEventHandlers() {
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this);
  }

  handleAddTask() {
    const currentTimeStamp = new Date();
    const taskName = this.taskInput.current.value;
    const task = {
      id: this.state.counter + 1,
      name: taskName,
      completed: false,
      dateTimeString: getFormattedDateTime(currentTimeStamp) + " (Added) ",
    };
    if (taskName !== "")
      this.setState(
        { counter: this.state.counter + 1, tasks: [...this.state.tasks, task] },
        () => (this.taskInput.current.value = "")
      );
  }

  handleKeyPress(event) {
    if (event.key === "Enter") this.handleAddTask();
  }

  handleRemoveTask(id) {
    let { tasks } = this.state;
    const removedArr = tasks.filter((e) => e.id !== id);
    tasks = [...removedArr];
    this.setState({ tasks });
  }

  handleUpdateTask(id) {
    const { tasks } = this.state;
    const index = tasks.findIndex((element) => element.id === id);
    const task = tasks[index];
    // No I18N
    const updatedTaskName = prompt("Enter the updated task..", task.name);
    if (task.name === updatedTaskName || updatedTaskName === null) {
      // No I18N
      alert("No changes found!");
    } else if (updatedTaskName === "") {
      // No I18N
      alert("Invalid task name, Please try again!");
    } else {
      let changedTasks = [...tasks];
      const currentTimeStamp = new Date();
      changedTasks[index] = {
        ...tasks[index],
        name: updatedTaskName,
        dateTimeString: getFormattedDateTime(currentTimeStamp) + " (Modified) ",
      };
      this.setState({ tasks: changedTasks });
    }
  }

  handleChangeTask(id) {
    const { tasks } = this.state;
    const index = tasks.findIndex((element) => element.id === id);
    let changedTasks = [...tasks];
    changedTasks[index] = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    this.setState({ tasks: changedTasks });
  }

  getPendingTasks() {
    const { tasks } = this.state;
    const pendingTasks = tasks.filter((task) => task.completed === false);
    return pendingTasks;
  }

  getCompletedTasks() {
    const { tasks } = this.state;
    const completedTasks = tasks.filter((task) => task.completed === true);
    return completedTasks;
  }

  onHandleClick(action, id) {
    switch (action) {
      case "change":
        this.handleChangeTask(id);
        break;
      case "remove":
        this.handleRemoveTask(id);
        break;
      case "update":
        this.handleUpdateTask(id);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="rootContainer">
        <div className="topContainer">
          <div className="headerContainer">
            <h1>Todo Application</h1>
          </div>
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
        </div>
        <div id="taskContainer">
          <TaskList
            title={"Pending List"}
            titleId={"pendingListTitle"}
            data={this.getPendingTasks()}
            onHandleClick={(action, id) => this.onHandleClick(action, id)}
          />
          <TaskList
            title={"Completed List"}
            titleId={"completedListTitle"}
            data={this.getCompletedTasks()}
            onHandleClick={(action, id) => this.onHandleClick(action, id)}
          />
        </div>
      </div>
    );
  }
}

export default Main;
