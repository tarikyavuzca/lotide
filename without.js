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

const without = function(arr,excArr) {
  let resultArr = [];
  for (let index in arr) {
    if (arr[index] !== excArr[0]) {
      resultArr.push(arr[index]);
    }
  } return resultArr;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);