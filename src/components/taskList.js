import React, { Component } from "react";
import Task from "./task";
class TaskList extends Component {
  state = {};

  render() {
    const { title, titleId, data, onHandleClick } = this.props;
    return (
      <div className="split">
        <label id={titleId}>{title}</label>
        <ul>
          {data.map((item) => (
            <Task key={item.id} data={item} onHandleClick={onHandleClick} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
