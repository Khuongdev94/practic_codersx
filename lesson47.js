// question 1:
function isWeekend(dateString) {
  let date = new Date(dateString);
  const day = date.getDay();
  console.log(day);
  if (day == 0 || day == 6) return true;
  return false;
}
console.log(isWeekend("2023/08/12"));
// result : true

// question 2 :
function diffMs(a, b) {
  return (new Date(b).getTime() - new Date(a).getTime()) / 3600 / 24 / 1000;
}

console.log(diffMs("2023/08/14", "2023/08/19"));
// result: 5
