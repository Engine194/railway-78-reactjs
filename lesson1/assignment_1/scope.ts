/*
Question 1: Scope
Khai báo biến fullName và function hello() để in ra fullName theo 3
cách
a) Khai báo fullName là Global scope
b) Khai báo fullName là Function scope

*/
var name : string = "Hai";


{
    var name: string = "Ba";
}



/*

2

c) Khai báo fullName là Lexical Scope

Question 2: Reference Function
Khai báo 1 function printName() và in ra tên của bạn.
Gán function printName và 1 variable có tên là myName, sau đó sử
dụng variable myName để in ra tên của bạn
Question 3: Closure
Khai báo 1 function getGreeting() có 2 tham số firstName, lastName.
Bên trong function khai báo 1 inner function greeting() trả về
firstName + lastName
Sử dụng getGreeting() function để in ra tên của bạn
Question 4: Closure & Loop
Viết 1 vòng for, mỗi 1 giây in ra từng số 1 2 3 4 5 6
*/