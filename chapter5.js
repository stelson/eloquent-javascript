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