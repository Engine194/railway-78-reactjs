// Ex1: Datatype

// Department
// class Department {
//     private departmentId: number;
//     private departmentName: string

//     constructor(id: number, name: string) {
//         this.departmentId = id;
//         this.departmentName = name;
//     }

//     public getId() {
//         return this.departmentId;
//     }  
// }

// // Position
// class Position {
//     private positionId: number;
//     private positionName: string;
// }

// class Account {
//     private departmentId: Department;
//     private positionName: Position;

// }

// datatype casting
/*
Question 1:
Khai báo 2 số lương có kiểu dữ liệu là float.
Khởi tạo Lương của Account 1 là 5240.5 $
Khởi tạo Lương của Account 2 là 10970.055$
Khai báo 1 số int để làm tròn Lương của Account 1 và in số int đó ra
Khai báo 1 số int để làm tròn Lương của Account 2 và in số int đó ra
*/

class Account {
    salary: number;
    name: string;
    constructor(n: string, s: number) {
        this.salary = s;
        this.name = n;
    }
}

/*
Question 2:
Lấy ngẫu nhiên 1 số có 5 chữ số (những số dưới 5 chữ số thì sẽ thêm
có số 0 ở đầu cho đủ 5 chữ số)
*/

var randomNum = Math.round(Math.random() * 10**5);
console.log(randomNum);

// 1. tao ra 1 array rong co 5 elements
// 2. Loop qua array do, trong moi lan loop se randoom 1 so tu 0 -> 9
// 3. update value cua array thanh so vua nhan dc
// 4. Cong cac phan tu lai theo kieu string

var myArr : number[] = Array.from({length: 5}).map(function(_, index) {return 0});
console.log('myArr...', myArr);

myArr.forEach( function(value, index, arr) {
    // console.log('value...', value);
    // console.log('index...', index);
    // console.log('arr...', arr);

    // random tu 0 -> 9;

    var randomNum = Math.round(Math.random()*10) ;
    // gan lai gia tri cho value
    arr[index] = randomNum >= 10  ? 0 : randomNum;

});
console.log('myArr...', myArr.join(""));

// optimize 1

var myArr1 : number[] = [];
for (let i = 0; i < 5; i++) {
    var randomNum = Math.round(Math.random()*10) ;
    myArr1.push(randomNum >= 10  ? 0 : randomNum)
}
console.log('myArr1...', myArr1.join(""));

// optimze 2

var myArr2 = Array.from({length: 5}).map(
    function() {
        var randomNum = Math.round(Math.random()*10) ;
        return randomNum >= 10  ? 0 : randomNum
    }
);
console.log('myArr2...', myArr2.join(""));
