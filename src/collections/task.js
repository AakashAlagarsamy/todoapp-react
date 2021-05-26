/* $Id$ */
import { generateTaskId, getFormattedDateTime } from "./../utils/utils";
export default class Task {
  constructor(name) {
    this.createNewTask(name);
  }

  createNewTask(name) {
    this.id = generateTaskId();
    this.name = name;
    this.completed = false;
    this.timeString = getFormattedDateTime(new Date()) + " (Added) ";
  }

  changeTaskStatus() {
    this.completed = !this.completed;
  }

  updateTaskName(name) {
    this.name = name;
    this.timeString = getFormattedDateTime(new Date()) + " (Modified) ";
  }
}
