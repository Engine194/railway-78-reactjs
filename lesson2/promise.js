// const myPromise = new Promise((resolve, reject) => {
//   fetch("https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees")
//     .then((res) => res.json())
//     .then((resource) => {
//       console.log("resource...", resource);
//       resolve(resource);
//     })
//     .catch(reject);
// })
//   .then((res) => {
//     console.log("Nikita");
//     console.log("\n\n\n\n\nres 1...", res);
//     if (res?.length > 0) {
//       var firstEle = res[0];
//       return fetch(
//         `https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees/${firstEle.id}`
//       ).then((res) => res.json());
//     }
//   })
//   .then((res) => {
//     console.log("res 2 ...", res);
//   })
//   .catch((error) => {})
//   .finally(() => {
//     console.log("finally...");
//   });

// console.log("myPromise...", myPromise);

var getUser = async () => {
  const result1 = await fetch(
    "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees"
  ).then((res) => res.json());
  console.log("result1...", result1);
  if (result1?.length > 0) {
    var firstEle = result1[0];
    var result2 = await fetch(
      `https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees/${firstEle.id}`
    ).then((res) => res.json());
    console.log("result2...", result2);
    return result2;
  }
};

var myResult = getUser();
console.log(myResult);
