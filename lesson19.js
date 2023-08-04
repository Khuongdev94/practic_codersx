// question 1 :Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
const param = [1, 3, 42, 31, 13, 12];

function findFirstEvenNumber(array) {
  return array.find((item) => {
    if (item % 2 == 0) {
      return item;
    }
    return undefined;
  });
}
console.log(findFirstEvenNumber(param));
// result : 42

/** question 2:
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, number) {
  return array.find((item) => {
    if (item % number == 0) {
      return item;
    }
    return undefined;
  });
}
console.log(findDivisibleNum(param, 3));
// result : 3
