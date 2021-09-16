const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (array, action) {
  let newObj = Object.keys(array);
  for(let item in newObj) {
    if(action(array[newObj[item]])) {
      return newObj[item];
    }
  }
  return undefined;
};

let findKey1 =({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

let actual1 = findKey(findKey1, x => x.stars === 2);
let expected1 = "noma";
assertEqual(actual1, expected1); // true

let actual2 = findKey(findKey1, x => x.stars < 2);
let expected2 = "noma";
assertEqual(actual2, expected2);  // false

let actual3 = findKey(findKey1, x => x.stars === 2222);
let expected3 = "noma";
assertEqual(actual3, expected3);  // false