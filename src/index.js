'use strict';

const { EventEmitter } = require('events');
const eventBus = new EventEmitter();

(async () => {
  console.log(eventBus);
})();
