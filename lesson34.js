// question 1:  Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 *
//  * @param {number} age;
//  * @return {boolean} canDrive;
//  */
let canDrive;

function checkCanDrive(age) {
  return age > 16 ? (canDrive = true) : (canDrive = false);
}
console.log(checkCanDrive(12));
// result: false

// question 2: Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  return a > 0 ? (b = 1) : a < 0 ? (b = 2) : (b = 3);
}
console.log(doSomethingTernary(0));
// result : 3
