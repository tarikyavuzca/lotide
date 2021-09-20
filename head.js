const assertEqual = require('./assertEqual');

const head = function(arr) {
  for (let i = 0; i < arr.length; i++)
    return arr[i];
};

module.exports = head;