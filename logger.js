
const EventEmittor= require('events');

var url = 'http://myLogger.io/log';

class Logger extends EventEmittor{
   log(message){
    //http request
    console.log(message);

    //raise an event
    this.emit('MessageLogged',{id:1, url:url});
  }
}


module.exports = Logger;
