// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
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
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);