const tail = function(arr) {
  let retArr = [];
  if (arr.length <= 1) {
    return retArr;
  } else {
    retArr = arr.slice(1);
  } return retArr;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");