// question 1: Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const inputs = [2, 7, 4, 5, 6, 13, 5, 78];
function fiveAndGreaterOnly(arr) {
  return arr.filter((item) => item > 5);
}
console.log(fiveAndGreaterOnly(inputs));
// result : [7,6,13,78]

//  question 2: Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  return arr.filter((item) => item % 2 == 0);
}
console.log(evensOnly(inputs));
// result : [2,4,6,78]

/**  question 3:
 * Give a list of students, filter out non-female
 */

const members = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "gay" },
];

function filterOutFemales(members) {
  return members.filter((item) => item.gender !== "gay");
}
console.log(filterOutFemales(members));
// result:
// [{ name: "Lan", gender: "female" },{ name: "Linh", gender: "female" },{ name: "Trung", gender: "male" },];
