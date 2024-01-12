// var myDate = [12, 1];

// var day = myDate[0];
// var month = myDate[1];
// var year = myDate[2];

// var [myDay, myMonth, myYear] = myDate;

// console.log('day', day, myDay);
// console.log('month', month, myMonth);
// console.log('year', year, myYear);

var myDateObj = {
    day: 12,
    month: 1,
    year: 2024,
};

var myDay = myDateObj.day;
var myMonth = myDateObj.month;
var myYear = myDateObj.year;

var { day : day1, month, year } = myDateObj;


export default myDateObj;
export { myDateObj };