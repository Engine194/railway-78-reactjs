var myPrimitive = "aksdf";

var myObj = {
    a: 1,
    b: 2,
};

var recievePrimitive = myPrimitive;
var recieveObj = myObj;
console.log("recievePrimitive...", recievePrimitive);
recievePrimitive = "12345";
console.log("recievePrimitive...", recievePrimitive);


recieveObj.a = 12;

console.log("myObj.a...", myObj.a);
// function expression
var modifyMe = (str = "str", num) => {
    console.log("str...", str);
    console.log("num...", num = 0);
    return str + num
};

modifyMe();

var sum = (...listNumer) => {
    console.log(listNumer);
    return listNumer.reduce((acc, v, i) => {
        return acc + v;
    }, 0);
};

console.log(

    sum(2,3,4, 789 ,5,5,5 ,5 ,5,555,6, 66,6 ,7,)
);




// var myName = "Trinh";

// modifyMe(myName);

// console.log('myName...', myName);

// // function declaration
// function modifyMeV2(obj) {
//     obj.myName = "Nikita";
// }

// var myObjv2 = {
//     myName: "Trinh"
// };

// modifyMeV2(myObjv2);

// console.log("myObjv2...", myObjv2);






