console.time("Time this");

// const request = require("request");
// request("https://randomuser.me/api/", function (error, response, body) {
//   console.error("error:", error);
//   console.log("statusCode:", response && response.statusCode);
//   console.log("body:", JSON.parse(body).info);
// });

// console.timeEnd("Time this");

//----------------------
const axios = require("axios").default;

const link1 = "https://jsonplaceholder.typicode.com/todos/1";

const link2 = "https://jsonplaceholder.typicode.com/todos/2";

function getData(data1, data2) {
  result1 = axios
    .get(data1)
    .then(function (response) {
      console.log(response.data.title);
    })
    .catch(function (error) {
      console.log(error);
    });

  result2 = axios
    .get(data2)
    .then(function (response) {
      console.log(response.data.title);
    })
    .catch(function (error) {
      console.log(error);
    });
  return result1, result2;
}

getData(link1, link2);
