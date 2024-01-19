/* author: Nong Van Trinh */
var arr = ["a", "b", "c", "d", "e"];
for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    console.log(element);
    console.log(arr[i]);
}


/* Trong js sẽ chuộng sử dụng các hàm build sẵn */
// Recommended
var arr = ["a", "b", "c", "d", "e"];
arr.forEach((char, index) => {
    console.log(`Value: ${char}`);
    console.log(`Index: ${index}\n--------------`);
});


