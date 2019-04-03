const Memory = require('./memory.js');

const mem = new Memory();

class Array {

  constructor() {
    this.length = 0;
    this.ptr = mem.allocate(this.length);
  }

  push(value) {
    this._resize(this.length + 1);
    mem.set(this.ptr + this.length, value);
    this.length++;
  }
}


console.log(mem.head);
mem.allocate(10);
console.log(mem.head);



// module.exports = Array;
