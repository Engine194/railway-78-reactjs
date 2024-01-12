var fullName = "Nikita Nguyen";
var age = 30;
var isMale = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        console.log('this...', this);
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var trinh = new Person("Trinh", 20);
