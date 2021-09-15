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
};


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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false