// question 1:  Filter các sản phẩm khi biết id danh mục sản phẩm
//   Ví dụ đây là 1 danh sách các danh mục sản phẩm,
//   khi người dùng muốn lọc các sản phẩm thuộc danh mục nào
//   thì filter các sản phẩm của danh mục đó.

const categories = [
  { id: 1, name: "Đồ điện tử" },
  { id: 2, name: "Đồ gia dụng" },
  { id: 3, name: "Nội thất" },
];

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

function filterProductsByCategoryId(id) {
  return listProducts.filter((item) => item.categoryId === id);
}
console.log(filterProductsByCategoryId(3));
// result : [
//   { id: 3, categoryId: 3, name: "Ghế sofa" },
//   { id: 7, categoryId: 3, name: "Cửa kính" },
//   { id: 9, categoryId: 3, name: "Bàn tròn" },
// ];

/** question 2:
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 *
 */
const arrayNumber = [1, 1, 2, 3, 3, 4, 5, 6, 7, 3, 2, 4, 5, 6];
function removeDuplicate(array) {
  const singleArray = [];
  array.forEach((item) => {
    if (singleArray.indexOf(item) == -1) {
      singleArray.push(item);
    }
    return singleArray;
  });
  return singleArray;
}
console.log(removeDuplicate(arrayNumber));

// result :  [1, 2, 3, 4, 5, 6, 7 ];
