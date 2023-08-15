// question 1: Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}
// console.log(reverse("đsfdsfsfe"));
// result : "fsfsdfsđ"

//question2 : Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(phrase) {
  const arrString = phrase.split(" ");
  for (let i = 0; i < arrString.length; i++) {
    let arrItemString = arrString[i].split("");
    arrItemString[0] = arrItemString[0].toUpperCase();
    arrString[i] = arrItemString.join("");
  }
  return arrString.join(" ");
}
// console.log(capitalize("where do you go"));
// result: Where Do You Go

// question 3:  Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"
function getExtensionFilename(filename) {
  const strArray = filename.split(".");
  return strArray[strArray.length - 1];
}
// console.log(getExtensionFilename("getExtension. Filename.abc.mp3"));
// result : mp3

//question4 : viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
// console.log(findMax(6, 4, 9));
// result :9

// question 5: viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(str) {
  return str.indexOf("Java") == 0;
}
// console.log(startWith("Prints to stdout with newline"));
// result : false

/* question 6: 
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/

const arrNumber = [2, 7, 4, 5, 6, 13, 5, -78];
function findMaxDiff(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max =
      max < Math.abs(arr[i] - arr[i - 1]) ? Math.abs(arr[i] - arr[i - 1]) : max;
  }
  return max;
}
// console.log(findMaxDiff(arrNumber));
// result: 83

// question 7 :
// Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal(str) {
  if (str === "") return true;
  else {
    let countP = 0,
      countT = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "p") countP++;
      if (str.charAt(i) == "t") countT++;
    }
    return countP == countT;
  }
}
// console.log(equal("Khuongpp CoderX % nodett leson50.js"));

// question 8:
//  viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
  if (n === undefined) return [array[0]];
  if (n <= 0) return [];
  if (n <= array.length) return array.slice(0, n);
  if (n > arr.length) return array;
}
// console.log(first("nguyenkhackhuong", 8));

//question 9: Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'
function omitCharAt(str, n) {
  if (n > str.length - 1 || n < 0) return str;
  else {
  }
}
// console.log(omitCharAt("1234567", 9));

[{ id: 1 }, { id: 2 }, { id: 3 }].find((item) => item.id === 1);

const zoneObj = {
  ["1"]: { id: 1 },
  ["2"]: { id: 2 },
  ["3"]: { id: 3 },
};

Object.values(zoneObj);
// ["1","2","3"]

zoneObj["1"];

//question 10 : Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
  return Math.abs(a - 100) > Math.abs(b - 100) ? b : a;
}
// console.log(nearestTo100(-1, 200));

/* question 11: Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
  return number1 * number2 < 0 ? true : false;
}
// console.log(checkInt(-1, 5));
// result : true

/*question 12 :
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
  return n > 13 ? Math.abs(n - 13) * 2 : Math.abs(n - 13);
}
// console.log(difference(10));
// result: 3

/*question 13:  Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(String) {
  return String.indexOf("Py") === 0 ? String : "Py" + String;
}
// console.log(pyString("Stringdfdfds"));
// result :PyStringdfdfds

/* question 14:  Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {}

// question 15 : viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
  const startStr = str.slice(0, n);
  const endStr = str.substr(str.length - n);
  return startStr + endStr;
}
// console.log(newString("bjcvuvwcw554", 3));

// -----
function validateEmail(email) {
  if (!email) {
    //
    return false;
  }

  if (email.length >= 30) {
    //
    return false;
  }

  if (!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")) {
    console.log("email k hợp lệ");
    return false;
  }

  return true;
}
// console.log(validateEmail("jbjbd@yhoo.com"));

/* question 16: Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Math.floor(i / size);
    if (!results[num]) {
      results[num] = [];
    }
    results[num].push(arr[i]);
  }
  return results;
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 3));

function chunk(array, size) {
  const results = [];
  while (0 < array.length) {
    console.log(array);
    results.push(array.splice(0, size));
  }
  return results;
}

/* question 17: Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
const arrayNumber = [3, 2, 4, 1, 5, 8, 5, 9, 2];
function maxOfSumChain(arr, n) {
  let totalLast = 0;
  for (let i = 0; i <= arr.length; i++) {
    let totalLoop = 0;
    for (let j = i; j < i + n; j++) {
      totalLoop += arr[j];
      if (totalLast < totalLoop) {
        totalLast = totalLoop;
      }
    }
  }
  return totalLast;
}
// console.log(maxOfSumChain(arrayNumber, 2));

/* question 18: Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
  const objCount = arr.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 0;
    acc[cur]++;
    return acc;
  }, {});
  let arrayCount = [];
  for (let key in objCount) {
    arrayCount.push({ key: key, value: objCount[key] });
  }
  let max = 0;
  let keyMax = null;
  arrayCount.forEach((item) => {
    if (max < item.value) {
      max = item.value;
      keyMax = item.key;
    }
  });
  return keyMax;
}
// console.log(findMostFrequent([2, 2, 3, 4, 1, 2, 1, 1]));

/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?
Input: 2 chuỗi String
Output: True hoặc False
ví dụ:
Input: abc cba
Output: True
Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
  if (str1.length != str2.length || str1.length == 0) return false;

  const sortStr1 = str1.split("").sort((a, b) => a.localeCompare(b));
  const sortStr2 = str2.split("").sort((a, b) => a.localeCompare(b));
  if (!sortStr1.join("").includes(sortStr2.join(""))) return false;
  return true;
}
// console.log(rearrangeChar("fdsd", "dfds"));

/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findMaxDiff(array) {
  const sortArray = array.sort((a, b) => a - b);
  return sortArray[array.length - 1] - sortArray[0];
}
console.log(findMaxDiff([2, 3, 5, 3, 5, 4, -8, -3]));
