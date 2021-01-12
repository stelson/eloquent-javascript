///===========1===========

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((flatArray, next) => flatArray.concat(next), []);
console.log(newArray);
// → [1, 2, 3, 4, 5, 6]