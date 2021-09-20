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

module.exports = assertArraysEqual;