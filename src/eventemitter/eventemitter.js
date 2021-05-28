class EventEmitter {
  constructor() {
    this.events = {};
  }

  publish(eventName) {
    if (Object.keys(this.events).includes(eventName)) {
      this.events[eventName].map((item) => item());
    }
  }

  subscribe(eventName, callBacks) {
    if (!Object.keys(this.events).includes(eventName)) {
      this.events[eventName] = callBacks;
    } else {
      this.events[eventName] = [...this.events[eventName], ...callBacks];
    }
  }

  unsubscribe(eventName, callBacks) {
    if (Object.keys(this.events).includes(eventName)) {
      const newCallbacks = this.events[eventName].filter(
        (item) => callBacks.indexOf(item) === -1
      );
      this.events[eventName] = [...newCallbacks];
      if (!this.events[eventName].length) {
        delete this.events[eventName];
      }
    }
  }
}

export default EventEmitter;
