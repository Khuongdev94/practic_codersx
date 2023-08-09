/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
const array = [5, 2, 8];
function multiply(arr) {
  var mul = 1;
  for (value of arr) {
    mul *= value;
  }
  return mul;
}
console.log(multiply(array));

var mul = 1;
array.forEach((item) => (mul *= item));
console.log(mul);

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau,
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: "twin-bed",
      price: 100,
    },
  },
};

function getAllKeys(arr) {
  let keys = [];
  for (let key in arr) {
    if (typeof key == "object") {
      keys.push(key);
      getAllKeys(key);
    } else {
      keys.push(key);
    }
  }
  return keys;
}

console.log(getAllKeys(apartment));

/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
let inputArray = [5, 2, 8, 9, 34, 2, 6, 9];

function sum(numbers) {
  if (numbers.length == 0) {
    return 0;
  } else {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
console.log(sum(inputArray));

/**
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

function getArray(arr, num) {
  return arr.slice(0, num);
}
console.log(getArray(inputArray, 4));

/**
 * Viết function xóa n phần tử cuối có trong mảng.
 */

function cutArray(arr, num) {
  return arr.splice(arr.length - num, num);
}
console.log(cutArray(inputArray, 4));
