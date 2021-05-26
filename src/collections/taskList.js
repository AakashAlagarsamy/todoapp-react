/* $Id$ */
import Task from "./task";
import EventEmitter from "./../eventemitter/eventemitter";
class TaskList extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
  }

  addTask(taskName) {
    const task = new Task(taskName);
    this.tasks.push(task);
    this.publish("add");
  }

  removeTask(id) {
    const removedArr = this.tasks.filter((element) => element.id !== id);
    this.tasks = [...removedArr];
    this.publish("remove");
  }

  updateTask(id, newTaskName) {
    const index = this.tasks.findIndex((element) => element.id === id);
    this.tasks[index].updateTaskName(newTaskName);
    this.publish("update");
  }

  changeTask(id) {
    const index = this.tasks.findIndex((element) => element.id === id);
    this.tasks[index].changeTaskStatus();
    this.publish("change");
  }
}

const taskListInstance = new TaskList();
export default taskListInstance;
