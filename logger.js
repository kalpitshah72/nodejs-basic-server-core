const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //Raise an event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();
logger.on("message", data => console.log("Called Listener ", data));

logger.log("Hello World");
logger.log("Hello World New");
logger.log("Hello World What");
logger.log("Hello World New1");
