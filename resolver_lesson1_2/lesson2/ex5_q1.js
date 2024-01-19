/* Callback - Promise - Async-await */

// $.get(url, (data, status) => {
//     lasdflasfkafkas;fl
// })

const createUserApi = (url, data, callback) => {
  const { id, name } = data;
  setTimeout(() => {
    callback({ id, name, from: url });
  }, 1500);
};

const company = {
  groups: [],
};

const createGroupApi = (user, callback) => {
  setTimeout(() => {
    const newGroup = { id: "vti", name: "Develop", memebers: [user] };
    company.groups.push(newGroup);
    callback(newGroup);
  }, 2000);
};

// : Math.round(Math.random() * 10 ** 5)

// createUser => createGroup => End

/*
    Question 1: Use callback to implement
*/
console.log("creating user...");
createUserApi(
  "vti.edu.vn",
  { id: Math.round(Math.random() * 10 ** 5), name: "Nikita" },
  (user) => {
    if (user?.id) {
      console.log(`User ${user.name} has been created!`);
      console.log("creating group...");
      createGroupApi(user, (newGroup) => {
        if (newGroup?.id) {
          console.log(
            `Group ${newGroup.name} has been created!`,
            company.groups
          );
        }
      });
    }
  }
);

const createUserApiPromise = (url, data) =>
  new Promise((res, rej) => {
    try {
      createUserApi(url, data, res);
    } catch (error) {
      rej(error);
    }
  });

const createGroupApiPromise = (user) =>
  new Promise((res, rej) => {
    try {
      createGroupApi(user, res);
    } catch (error) {
      rej(error);
    }
  });

const createUserGroup = async () => {
  const user = await createUserApiPromise("vti.edu.vn", {
    id: Math.round(Math.random() * 10 ** 5),
    name: "Nikita",
  });
  console.log(`User ${user.name} has been created!`);
  console.log("creating group...");
  const newGroup = await createGroupApiPromise(user);
  console.log(`Group ${newGroup.name} has been created!`, company.groups);
};
createUserGroup();
console.log("continue main thread...");
