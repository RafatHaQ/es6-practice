class Parent{
    constructor(params) {
        this.fatherName = 'Schwerznegger'
    }
}


class Child extends Parent{
    constructor(name) {
        super()
        this.name = name
    }

    getFullname(){
        return this.name + ' ' + this.fatherName
    }
}



const baby = new Child("Arnold")
const baby2 = new Child("Tom Holland")
console.log(baby);
console.log(baby2);
console.log(baby2.getFullname());