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

const eqArrays = function (arr1, arr2) {
  let array1 = '', array2 = '';
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.legth; i++) {
      array1 += arr1[i];
      array2 += arr2[i];
    }
  } else {
    return false;
  }
  if(array1 === array2) {
    return true;
  } else {
    return false;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, action) {

// }

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
