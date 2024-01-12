var student = {
    university: "UNIA",
    class: "co hoc",
    school: "Co dien tu",
};
var teacher = {
    ...student,
    class: "toan tin",
};

console.log('teacher...', teacher);