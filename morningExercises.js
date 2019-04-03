'use strict';

const Array = require('./Array.js');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an items to the array
  arr.push(3);                 // will allocate 3 blocks, bringing us 3 blocks

  // length: 1, capacity: 3, ptr: 0

  arr.push(5);                 // no alloc necessary

  arr.push(15);                // no alloc necessary

  arr.push(19);                // will allocate 9 more blocks, bring us to 12 blocks

  arr.push(45);                // no alloc necessary

  arr.push(10);                // no alloc necessary

  // length: 6, capacity: 12, ptr: 3
  // console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();

  // length: 3, capacity: 12 , ptr: 3
  // console.log(arr);

  // console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();

  arr.push('tauhida');

  // console.log(arr.get(0));
  // NaN because 'tauhida' is not a Float64
}

// The purpose of _resize: It will find and allocate a block of contiguous memory equal in size to the size of the value passed to the _resize method. Then it copies the array at the original address and inserts it into memory at the new address. 

main();
