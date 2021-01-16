///===========1===========

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((flatArray, next) => flatArray.concat(next), []);
console.log(newArray);
// → [1, 2, 3, 4, 5, 6]


///===========2===========
function loop(start, test, update, body) {
    for(let i = start; test(i); i = update(i))
        body(i);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


///===========3===========
function every1(array, test) {
    for (let element of array) {
        if (!test(element)) 
            return false;
    }
    return true;
}

function every2(array, test) {
    return !array.some(el => !test(el));
}
  
console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true