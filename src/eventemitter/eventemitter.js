class EventEmitter {
  constructor() {
    this.events = {};
  }

  publish(eventName) {
    return this.events[eventName]();
  }

  subscribe(eventName, callBack) {
    if (!Object.keys(this.events).includes(eventName)) {
      this.events[eventName] = callBack;
    }
  }

  unsubscribe(eventName) {
    if (Object.keys(this.events).includes(eventName)) {
      delete this.events[eventName];
    }
  }
}

export default EventEmitter;
