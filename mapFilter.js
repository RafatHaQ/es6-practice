const numbers = [3, 4, 5, 6, 7, 8]
// const output = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const result = element * element
//     output.push
    
// }

function square(element){
    return element * element
}

const square2 = element => element * element

const result = numbers.map(x => x * x)

const bigger = numbers.filter(x => x > 0)

const lessThanO = numbers.find(x => x < 0)
console.log(bigger);
console.log(lessThanO);
console.log(result);