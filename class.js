class Student{
    constructor(sId, sName){
        this.id = sId
        this.name = sName
        this.school = 'Ideal School and College'
    }
}

const student1 = new Student(12, 'Shuvo');
const student2 = new Student(33, 'Naina');
console.log(student1, student2);