const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let array1 = '', array2 = '';
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.legth; i++) {
      array1 += arr1[i];
      array2 += arr2[i];
    }
  } else {
    return (console.log(arr1 + ' !== ' + arr2));
    
  }
  if (array1 === array2) {
    console.log(arr1 + ' === ' + arr2);
  } else {
    console.log(arr1 + ' !== ' + arr2);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let char of sentence) {
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
    i++;
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions('lighthouse in the house'));

