const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maananaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]

nameAll = []
for (let index = 0; index < students.length; index++) {
   nameAll.push(students[index].name)
}

const names = students.map(s => s.name)

const bigger = students.filter(s => s.id > 40 )
const biggerOne = students.find(s => s.id > 40 )
console.log(nameAll);
console.log(names);
console.log(bigger);
console.log(biggerOne);
