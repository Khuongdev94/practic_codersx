/* question 1: 
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/
function student(diemToan, diemLy, diemHoa) {
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
}
student.prototype.average = function () {
  return Math.ceil((this.diemToan + this.diemHoa + this.diemLy) / 3);
};
const student1 = new student(9, 7, 6);
const student2 = new student(8, 9, 6);
console.log(student1.average());
// result : 7

/* question 2 :
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
  this.name = name;
  this.level = level;
}
Student.prototype.school = "CodersX";
const student3 = new Student("khuong", "1");
console.log(student3.school);
// result :CodersX
