// question 1: Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)
const arrayNumber = [3, 2, 4, 1, 5, 8, 5, 9, 2];
function sortNumberUp(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortNumberUp(arrayNumber));
// result :  [
//   1, 2, 2, 3, 4,
//   5, 5, 8, 9
// ]

function sortNumberDown(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortNumberDown(arrayNumber));
// result :  [
//     9, 8, 5, 5, 4,
//     3, 2, 2, 1
//   ]
/** question 2 :
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần.
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */

const students = [
  { name: "A", score: 100 },
  { name: "B", score: 10 },
  { name: "C", score: 101 },
  { name: "D", score: 50 },
  { name: "E", score: 75 },
];

function getArrayStudents(students) {
  const sortStudent = students.sort((a, b) => b.score - a.score);
  return sortStudent.slice(0, 3);
}
console.log(getArrayStudents(students));
// result :[
//   { name: 'C', score: 101 },
//   { name: 'A', score: 100 },
//   { name: 'E', score: 75 }
// ]
