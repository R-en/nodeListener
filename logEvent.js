const EventEmittor= require('events');

const Logger = require('./logger');
const logger = new Logger();

//register a listener
logger.on('MessageLogged', (e) =>{
  console.log("Event Listeners",e);
});

logger.log('message');
