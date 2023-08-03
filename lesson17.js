/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
const numbers = [3, 4, 6, 8, 5, 3];
function tripPle(num) {
  return num * 3;
}

function multiply(numbers) {
  return numbers.map((item) => tripPle(item));
}
console.log(multiply(numbers));

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>
function readyToPutInTheDOM(arr) {
  return arr.map((item) => `<h1>${item.name}</h1><h2>${item.age}</h2>`);
}
console.log(readyToPutInTheDOM(users));
