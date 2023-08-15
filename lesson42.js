const axios = require("axios");

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

function getData(path) {
  return new Promise((resolve, reject) => {
    axios
      .get(path)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
}

Promise.all([getData(url1), getData(url2), getData(url3)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
