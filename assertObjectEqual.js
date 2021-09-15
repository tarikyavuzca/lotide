const eqObjects = function(object1, object2) {
  let key1Object = Object.keys(object1);
  let key2Object = Object.keys(object2);

  if (key1Object.length !== key2Object.length) {
    return false;
  } else {

    for (const key of key1Object) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if(!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};


const assertObjectEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

console.log(assertObjectEqual({ a: 1, b: 2}, { a: 1, b: 2}));
console.log(assertObjectEqual({ a: 1, b: 5}, { a: 1, b: 5}));
