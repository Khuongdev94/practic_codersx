/** question 1:
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/
// const student = {};

function showInfo(obj) {}

//question 2:   * Viết hàm xoá thuộc tính (prop) khỏi object student
//  * Trả về object đã được xoá
//  * Example:
//  *  removeProp("name") = { class: “VI”, rollno: 12 }
// */

function removeProp(prop) {
  var student = {
    name: "David Ray",
    class: "VI",
    rollNo: 12,
  };
  delete student[prop];
  return student;
}
// console.log(removeProp(class));

/** question 3: 
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 
 * lengthObj(student); // length: 3
}
*/
const student = { name: "Jerry", age: 14, role: "student" };

function countProperty(obj) {
  const arrayKeys = [];
  for (let keys in obj) {
    arrayKeys.push(keys);
  }
  return arrayKeys.length;
}
console.log(countProperty(student));
//  result : 4

// ** question 4:
//  * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
//  *  {
//  *    color: String,
//  *    shape: String,
//  *    fill: boolean
//  *  }
// */

function shape(color, shape, fill) {
  this.color = color;
  this.shape = shape;
  this.fill = fill;
}

const shape1 = new shape("red", "rectangle", true);
const shape2 = new shape("orange", "triangle", false);
const shape3 = new shape("tomato", "circle", true);
console.log(shape1);
// result : shape { color: 'red', shape: 'rectangle', fill: true }
