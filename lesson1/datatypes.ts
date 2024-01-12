var fullName: string = "Nikita Nguyen";
var age: number = 30;
var isMale: boolean = true;


class Person {
    private name: string;
    private age: number;
    constructor(name : string, age: number) {
        console.log('this...', this);
        this.name = name;
        this.age = age;
    }
}

var trinh = new Person("Trinh", 20);

module.exports = {
    data: trinh
}
