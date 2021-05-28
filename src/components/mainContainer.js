import React, { Component } from "react";
import TaskListContainer from "./taskListContainer";
import InputContainer from "./inputContainer";
import taskListInstance from "../collections/taskList";
class MainContainer extends Component {
  constructor() {
    super();
    this.handleReRender = this.handleReRender.bind(this);
  }

  componentDidMount() {
    taskListInstance.subscribe("add", [this.handleReRender]);
    taskListInstance.subscribe("remove", [this.handleReRender]);
    taskListInstance.subscribe("update", [this.handleReRender]);
    taskListInstance.subscribe("change", [this.handleReRender]);
    taskListInstance.subscribe("edit", [this.handleReRender]);
  }

  componentWillUnmount() {
    taskListInstance.unsubscribe("add", [this.handleReRender]);
    taskListInstance.unsubscribe("remove", [this.handleReRender]);
    taskListInstance.unsubscribe("update", [this.handleReRender]);
    taskListInstance.unsubscribe("change", [this.handleReRender]);
    taskListInstance.unsubscribe("edit", [this.handleReRender]);
  }

  handleReRender() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="rootContainer">
        <div className="topContainer">
          <div className="headerContainer">
            <h1>Todo Application</h1>
          </div>
          <InputContainer />
        </div>
        <div id="taskContainer">
          <TaskListContainer
            title={"Pending List"}
            titleId={"pendingListTitle"}
            taskListType={"pendingTasks"}
            class={"pendingContainer"}
          />
          <TaskListContainer
            title={"Completed List"}
            titleId={"completedListTitle"}
            taskListType={"completedTasks"}
            class={"completedContainer"}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
