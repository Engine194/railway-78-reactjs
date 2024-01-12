var myList = [1,2,3,4,5,6,9];
var [a, b, c, ...remain] = myList;
console.log(a, b, c, remain);

var myObj = {
    a: 11, b: 23, c: 35, d: 4, e: 5
};

var { a: a1, b: b1, c: c1, ...remainObj } = myObj;
console.log(a1, b1, c1, remainObj);