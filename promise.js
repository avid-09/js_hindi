// Example 1.........
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

// Example 2.........

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("My name is Soumen");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Connected");
});

// Example 3.........

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Example 3");
    resolve({ username: "Soumen", surename: "Mallick" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

// Example 4..........
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Sonai", surename: "Mallick" });
    } else {
      reject("Error!!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise finally resolved or rejected");
  });

// Example 5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ username: "sonki", surname: "Mallick" });
    } else {
      reject("Error: JS Went Wrong!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
