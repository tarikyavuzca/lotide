const takeUntil = function (array, action) {
 const arr1 = [];
 for (let item of array) {
   if(!action(item)) {
     arr1.push(item);
   } else {
     return arr1;
   }
 }
 return arr1;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);