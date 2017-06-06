const EventEmitter = require('events').EventEmitter;
const util = require('util');

let Person = function(name) {
  this.name = name;
}

util.inherits(Person, EventEmitter);

let ben = new Person("Ben Franklin");

ben.on('speak', function(said){
  console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not");

