// question 1: Given an array of arrays, flatten them into a single array

/**
 * Example:
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 *
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */
const deepArray = [["1", "2", "3"], [true], [4, 5, 6]];
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten(deepArray));
// result :  ["1", "2", "3", true, 4, 5, 6];

// question 2 : viết hàm trả về số lần xuất hiện truyền vào obj

const list = ["a", "c", "b", "b", "a", "d", "e"];

// for in lấy ra keys của array, object
// for of lấy ra item trong arr
// arr.map thay đổi thành mảng mới có số lượng item như cũ
// arr.find tìm item trong arr theo điều kiện tìm thấy trả về luôn
// arr.some kiểm tra điều kiện, gặp điều kiện đúng dừng lại luôn
// arr.forEach ....lắp qua  tất cả item trong mảng

// đếm số lần xuất hiện phần tử trong mảng
function countAppear(list) {
  const obj = {};
  for (let i = 0; i < list.length; i++) {
    if (!obj[list[i]]) {
      obj[list[i]] = 0;
    }
    obj[list[i]]++;
  }
  return obj;
}
console.log(countAppear(list));
// result : { a: 2, c: 1, b: 2, d: 1, e: 1 }

//  question 3 :tạo obj chứa tên của các categoryid
const listProducts = [
  { id: 1, categoryId: 1, name: "Tivi" },
  { id: 2, categoryId: 1, name: "Tủ lạnh" },
  { id: 3, categoryId: 3, name: "Ghế sofa" },
  { id: 4, categoryId: 1, name: "Máy giặt" },
  { id: 5, categoryId: 2, name: "Chén bát" },
  { id: 6, categoryId: 2, name: "Nồi cơm điện" },
  { id: 7, categoryId: 3, name: "Cửa kính" },
  { id: 8, categoryId: 1, name: "Điều hoà" },
  { id: 9, categoryId: 3, name: "Bàn tròn" },
  { id: 10, categoryId: 2, name: "Lò vi sóng" },
];

function getCategoryId(arr) {
  const obj = {};
  arr.forEach((item) => {
    if (!obj[item.categoryId]) {
      obj[item.categoryId] = [];
    }
    obj[item.categoryId].push(item.name);
  });
  return obj;
}
console.log(getCategoryId(listProducts));
// result {
//     '1': [ 'Tivi', 'Tủ lạnh', 'Máy giặt', 'Điều hoà' ],
//     '2': [ 'Chén bát', 'Nồi cơm điện', 'Lò vi sóng' ],
//     '3': [ 'Ghế sofa', 'Cửa kính', 'Bàn tròn' ]
//   }
