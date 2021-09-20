const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let retArr = [];
  if (arr.length <= 1) {
    return retArr;
  } else {
    retArr = arr.slice(1);
  } return retArr;
};

module.exports = tail;
