// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//This code snippet creates a new array called newArray and populates it with usernames from the original array,
//each followed by "!" added.
//It iterates through each user object in the original array, extracts the username property,
//appends "!" to it, and then adds it to the newArray.
let newArray = [];
array.forEach((user) => {
  let { username } = user; // !!!!! Destructure the username property from the user object
  username = username + "!";
  newArray.push(username);
});
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((user) => {
  let { username } = user;
  return username + "?";
});
console.log(mapArray);

//NOTE let { username } = user; is a destructuring assignment.
//It extracts the username property from each object in the array.
//This syntax allows us to create a new variable named username and assign it the value of the username property
//from the user object in a more concise manner.
//So, let { username } = user; is equivalent to let username = user.username;,
//but it's more succinct and readable. It helps to avoid repetitive syntax and makes the code cleaner.
//The name user used in the arrow function parameter (user) => { ... }
//is just a variable name chosen by the programmer for readability. You can name it whatever you prefer

//Filter the array to only include users who are on team: red

const filterArray = array.filter((user) => {
  return user.team === "red";
});
console.log(filterArray);

//Find out the total score of all users using reduce

const total = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(total);

// (1), what is the value of i? INDEX of the array.
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray2 = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);
