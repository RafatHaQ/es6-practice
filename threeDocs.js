const ages = [12, 14, 16, 13, 17]
const ages2 = [11, 14, 15, 18, 21]
const allAgers = ages.concat(ages2)
const allAgers2 = [...ages, ...ages2]
console.log(allAgers);
console.log(allAgers2);

const takaPoisha = [650, 450, 250]
const maximum = Math.max(...takaPoisha)
console.log(maximum);