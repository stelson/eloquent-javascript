console.log('Wake up Samurai! We have the city to burn!')

console.log('RECURSION');
///===========1===========

function isOdd(number) {
    if(number == 0)
        console.log('not odd');
    else if(number == 1)
        console.log('is odd');
    else isOdd(number - 2);
}

console.log(50);
isOdd(50);

console.log(75);
isOdd(75);
// isOdd(-1);


console.log('Bean counting');
///===========2===========

function countBs(sentence) {
    count = 0;
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i] == 'B')
            count++;
    }
    console.log(count)
} 

countBs('ffffdfdfBs')
countBs('ffffds')
countBs('fBBBBs')