
// function declaration
function doubleIt1(num){
    return num * 2
}

// Function expression
const doubleIt2 = function(num){
    return num * 2
}

const doubleIt3 = num => num * 2

console.log(doubleIt1(3));
console.log(doubleIt2(3));
console.log(doubleIt3(3));