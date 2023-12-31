/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function.
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

const inputs = [3, 5, 5];

function double(num) {
  return num * 2;
}

function sumAndDo(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((acc, cur) => acc + double(cur), 0);
  }
}
//  result: 26

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback.
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó,
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
function double(num) {
  return num * 2;
}

function transform(arr) {
  return arr.map((item) => double(item));
}
// result : [6,10,10]
