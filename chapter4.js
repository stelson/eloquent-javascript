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