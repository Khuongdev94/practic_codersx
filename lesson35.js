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
