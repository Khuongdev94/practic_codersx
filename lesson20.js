//question 1: Turn an array of voter objects into a count of how many people voted

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function totalVotes(arr) {
  const count = voters.filter((item) => item.voted);
  return count.length;
}
console.log(totalVotes(voters));
// result: 7

// question 2:  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 500 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function shoppingSpree(wishlist) {
  return wishlist.reduce((acc, cur) => acc + cur.price, 0);
}
console.log(shoppingSpree(wishlist));
// result :225500

//question 3: Given an array of all your wishlist items, returns an array of titles

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function arrayTitle(wishlist) {
  return wishlist.map((item) => item.title);
}
console.log(arrayTitle(wishlist));
// result: ["Tesla Model S","4 carat diamond ring","Fancy hacky Sack","Gold fidgit spinner","A second Tesla Model S"]
