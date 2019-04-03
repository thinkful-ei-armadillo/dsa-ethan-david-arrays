'use strict';

function URLify(url){
  let output = '';
  for (let i = 0; i < url.length; i++) {
    if(url[i] === ' '){
      output += '%20';
    } else {
      output += url[i];
    }
  }
  return output;
}

// input: 'www.this is our site'
// output: 'www.this%20is%20our%20site'

// bigO complexity: O(n) / linear

function filter(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 5){
      result.push(arr[i]);
    }
  }
  return result;
}

// bigO complexity: O(n) / linear

function maxSum(arr){
  let result = null;

  for (let sequenceLength = 1; sequenceLength <= arr.length; sequenceLength++) {
    for (let i = 0; i <= arr.length - sequenceLength; i++) {
      const sequenceSum = arr.slice(i, i + sequenceLength).reduce((a, b) => a + b);
      if(sequenceSum > result){
        result = sequenceSum;
      }
    }
  }
  return result;
}

// bigO complexity: O(n^2) / quadratic

function mergeArrays(arr1, arr2){
  // return arr.concat(arr2).sort((a,b) => a - b);

  let merged = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length || j < arr2.length){
    // while both counters are in bounds
    if(i < arr1.length && j < arr2.length){
      // if both counters are in bounds
      if(arr1[i] <= arr2[j]){
        merged.push(arr1[i]);
        i++;
      }
      if(arr2[j] <= arr1[i]){
        merged.push(arr2[j]);
        j++;
      }
    }else if(i < arr1.length){
      // if i is in bounds
      merged.push(arr1[i]);
      i++;
    } else if(j < arr2.length){
      // if j is in bounds
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged;
}

// bigO complexity: O(n) / linear

function removeCharacters (victim, blacklist) {

  let aftermath = '';

  for (let c = 0; c < victim.length; c++) {

    let charIsValid = true;

    for (let b = 0; b < blacklist.length; b++) {

      if (victim[c] === blacklist[b]) {
        charIsValid = false;
        break;
      }
    }

    if (charIsValid) {
      aftermath += victim[c];
    }
  }

  return aftermath;
}

// bigO complexity: O(n^2) / polynomial (quadratic)

function getProducts (nums) {

  const products = [];

  for (let a = 0; a < nums.length; a++) {

    let product = 1;

    for (let b = 0; b < nums.length; b++) {

      if (b !== a) {
        product *= nums[b];
      }
    }

    products.push(product);
  }

  return products;
}

// bigO O(n2) polynomial (quadratic)

function emptyRowAndCol (grid) {

  let clone = [];

  // loop grid rows
  for (let i = 0; i < grid.length; i++) {

    // clone row
    clone[i] = [...grid[i]];
  }

  // loop over rows
  for (let r = 0; r < grid.length; r++) {

    const row = grid[r];

    // loop over cols
    for (let c = 0; c < row.length; c++) {

      const col = row[c];

      if (col === 0) {

        // empty the row
        for (let a = 0; a < row.length; a++) {
          clone[r][a] = 0;
        }

        // empty the col
        for (let b = 0; b < grid.length; b++) {
          clone[b][c] = 0;
        }
      }
    }
  }

  return clone;
}

const input = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1],
];

// bigO O(n2) polynomial (quadratic)


function isRotation (str1, str2) {

  // do something clever
}
