// const assertArraysEqual = function(arr1, arr2) {
//   let array1 = '', array2 = '';
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.legth; i++) {
//       array1 += arr1[i];
//       array2 += arr2[i];
//     }
//   } else {
//     return (console.log(arr1 + ' !== ' + arr2));
    
//   }
//   if (array1 === array2) {
//     console.log(arr1 + ' === ' + arr2);
//   } else {
//     console.log(arr1 + ' !== ' + arr2);
//   }
// };

// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`Assertation Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function (arr1, arr2) {
//   let array1 = '', array2 = '';
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.legth; i++) {
//       array1 += arr1[i];
//       array2 += arr2[i];
//     }
//   } else {
//     return false;
//   }
//   if(array1 === array2) {
//     return true;
//   } else {
//     return false;
//   }
// }



const middle = function(arr) {
  let newArr = [];
  
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      newArr.push(arr[((arr.length) / 2) - 1]);
      newArr.push(arr[(arr.length) / 2]);
    } else {
      newArr.push(arr[Math.floor(0.5 * arr.length)]);
    }
  }
  return newArr;
};
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]