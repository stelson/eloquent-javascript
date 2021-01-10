console.log('The sum of a range');
///===========1===========

function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
}
  
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, -1)));
console.log(sum(range(1, 10, 3)));
console.log(sum(range(10, 100, 2)));


console.log('Reverse array');
///===========2===========

function reverseArray(array) {
  var reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray.push(array[array.length - 1 - i])
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


///===========3===========
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list;
}

console.log(arrayToList([10, 20, 30, 40, 50]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20