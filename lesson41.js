const request = require("request");
const url = "https://jsonplaceholder.typicode.com/todos/1";

function load(address) {
  return new Promise((resolve, reject) => {
    request(address, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      return resolve(JSON.parse(body).title);
    });
  });
}
load(url).then((rs) => console.log(rs));
