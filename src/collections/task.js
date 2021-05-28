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
    this.isEdit = false;
  }

  changeTaskStatus(key) {
    this[key] = !this[key];
  }

  updateTaskName(name) {
    this.name = name;
    this.timeString = getFormattedDateTime(new Date()) + " (Modified) ";
  }
}
