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
console.log(reverse("đsfdsfsfe"));
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
console.log(capitalize("where do you go"));
// result: Where Do You Go

// question 3:  Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"
function getExtensionFilename(filename) {
  const strArray = filename.split(".");
  return strArray[strArray.length - 1];
}
console.log(getExtensionFilename("getExtension. Filename.abc.mp3"));
// result : mp3

//question4 : viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
console.log(findMax(6, 4, 9));
// result :9

// question 5: viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(str) {
  return str.indexOf("Java") == 0;
}
console.log(startWith("Prints to stdout with newline"));
// result : false

/*
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
console.log(findMaxDiff(arrNumber));
// result: 83

//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
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
console.log(
  equal("nguyenkhackhuong@Nguyen-Khac-Khuongpp CoderX % nodett leson50.js")
);

// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
  if (n === undefined) return [array[0]];
  else if (n <= array.length) return array.slice(0, n);
  else return array;
}
console.log(first("nguyenkhackhuong", -9));

//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'
function omitCharAt(str, n) {
  if (n > str.length - 1 || n < 0) return str;
  else {
    const arrStr = str.split("");
    arrStr.splice(n, 1);
    return arrStr.join("");
  }
}
console.log(omitCharAt("1234567", 9));

// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
  return Math.abs(a - 100) > Math.abs(b - 100) ? b : a;
}
console.log(nearestTo100(-1, 200));

/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
  // viết code ở đây.
}
