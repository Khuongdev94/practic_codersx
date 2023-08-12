/** question 1 :
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */
const arrayNumber = ["A", "a", "d", "s", "b"];
function transform(arr) {
  return arr.map((item) => {
    switch (item) {
      case "A":
      case "a":
        return (item = 1);
      case "B":
      case "b":
        return (item = 2);
      default:
        return (item = 0);
    }
  });
}
console.log(transform(arrayNumber));
// result: [ 1, 1, 0, 0, 2 ]

/** question 2:
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */
function sum(x) {
  let i = 1;
  let sum = 0;
  while (i < x) {
    if (i % 2 != 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}
console.log(sum(7));
// result : 9

// kiểm tra số hoàn hảo
function checkPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == num) return true;
  return false;
}

console.log(checkPerfectNumber(500));

const list = ["a", "c", "b", "e", "a", "d", "e"];

// for in lấy ra keys của array, object
// for of lấy ra item trong arr
// arr.map thay đổi thành mảng mới có số lượng item như cũ
// arr.find tìm item trong arr theo điều kiện tìm thấy trả về luôn
// arr.some kiểm tra điều kiện, gặp điều kiện đúng dừng lại luôn
// arr.forEach ....lắp qua  tất cả item trong mảng

// đếm số lần xuất hiện phần tử trong mảng
function countAppear(list) {
  return list.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
  }, {});
}
console.log(countAppear(list));
// result : { a: 2, c: 1, b: 2, d: 1, e: 1 }

// lấy hết key trong obj
const apartment = {
  age: 1,
  bedroom: {
    area: 20,
    bed: {
      type: "twin-bed",
      price: 100,
    },
  },
  name: "ddd",
};

function getAllKeys(object, objAcc) {
  let objKey = objAcc || [];
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      objKey.push(key);
      getAllKeys(obj[key], objKey);
    } else {
      objKey.push(key);
    }
  }
  return objKey;
}

console.log(getAllKeys(apartment));

// tính a mũ x
function pow(a, x) {
  if (a == 0 && x == 0) {
    return;
  }
  if (x == 0) {
    return 1;
  }
  if (x == 1) {
    return a;
  }
  return a * pow(a, x - 1);
}
console.log(pow(3, 3));

// tính giai thừa
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));
