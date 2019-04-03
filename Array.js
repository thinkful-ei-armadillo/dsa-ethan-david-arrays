'use strict';

const Memory = require('./memory.js');

const mem = new Memory();

class Array {

  constructor() {
    this.length    = 0;
    this._capacity = 0;
    this.ptr       = mem.allocate(this.length);
  }

  push(value) {

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    mem.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = mem.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    mem.copy(this.ptr, oldPtr, this.length);
    mem.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return mem.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = mem.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  // js array   [1] = 42
  // our array  .insert(1, 42)

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // if we need more than we have, sensibly resize
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    // we know we have room to work
    // everything before index don't have to touch
    // everything after the index we move "right" 1 block
    mem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);

    // insert value into index
    mem.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // everything before index don't have to touch
    // everything after the index we move "left" 1 block (overwriting whatever
    // existed at index)
    mem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array;
