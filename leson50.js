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
console.log(reverse("đsfdsfsf"));
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
