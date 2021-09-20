// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;