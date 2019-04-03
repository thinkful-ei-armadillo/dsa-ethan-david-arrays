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

function mergeArrays(arr, arr2){
  
}