// question 1 ; Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
const listNumber = [2, 4, 5, 3, 2, 7];
function powerUp(arr) {
  return arr.map((item) => {
    if (item % 2 == 0) return item * item;
    return item;
  });
}
console.log(powerUp(listNumber));
// result : [ 4, 16, 5, 3, 4, 7 ]

/** question 2:
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round
 */

function average(arr) {
  const total = arr.reduce((acc, cur) => acc + cur);
  return Math.round(total / arr.length);
}
console.log(average(listNumber));
// result : 4

/* question 3:
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/
const number = [2, -10, -4, -4, 2, -3];
function positiveNumber(arr) {
  return arr.map((item) => Math.abs(item));
}
console.log(positiveNumber(number));
// result:  [ 2, 10, 4, 4, 2, 3 ]

//question 4:  Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  return Math.ceil(Math.random() * 100);
}
console.log(random());

/** question 5 :
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không?
 */
function rightTriangle(a, b, c) {
  if (a > b && a > c) return b * b + c * c == a * a;
  else if (b > a && b > c) return b * b == a * a + c * c;
  else if (c > a && c > b) return c * c == a * a + b * b;
  return false;
}
console.log(rightTriangle(3, 4, 6));
// result : false

/** question 6:
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
 */

function triGonIm(num) {
  const arrValue = [];
  arrValue.push(Math.sin(num).toFixed(3));
  arrValue.push(Math.cos(num).toFixed(3));
  arrValue.push(Math.tan(num).toFixed(3));
  return arrValue;
}
console.log(triGonIm(34));
// result : [ '0.529', '-0.849', '-0.623' ]
