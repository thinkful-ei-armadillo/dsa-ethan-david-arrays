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

  while(i < arr1.length -1 && j < arr2.length -1){
    // if(arr1[i] === undefined){
    //   merged.push(arr2[j]);
    //   j++;
    // }
    // if(arr2[j] === undefined){
    //   merged.push(arr1[i]);
    //   i++;
    // }
    while(arr1[i] <= arr2[j]){

      console.log('comparing', arr1[i], arr2[j]);
      merged.push(arr1[i]);
      // if(arr2[j] !== undefined){
      //   merged.push(arr2[j]);
      //   j++;
      // }
      i++;
    }
    while(arr2[j] <= arr1[i]){
      console.log('comparing', arr2[j], arr1[i]);

      merged.push(arr2[j]);
      // if(arr1[i] !== undefined){
      //   merged.push(arr1[i]);
      //   i++;
      // }
      j++;
    }
  }
  return merged;
}


console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));