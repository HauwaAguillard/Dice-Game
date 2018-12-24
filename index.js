//SOLUTION ONE STARTS HERE ********************************
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var imageSelector = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//Second image states here!

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var imageSelector2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.getElementById("title").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 === randomNumber2) {
  document.getElementById("title").innerHTML = "Nobody Wins, Please Play again!";
} else {
  document.getElementById("title").innerHTML = "Player 2 Wins 🚩";
}





//SOLUTION TWO STARTS HERE************************************
// function randomNumber() {
//   var number = Math.random();
//   number = Math.floor((number * 6)) + 1;
//   return number;
// }
//
// function randomImage(n) {
//   var diceImage = "images/dice" + n + ".png";
//   return diceImage;
// }
//
// var randArray = [];
// for (var i = 1; i < 3; i++) {
//   var n = randomNumber();
//   randArray.push(n);
//   var path = randomImage(n);
//   var img = ".img" + i;
//   document.querySelector(img).setAttribute("src", path);
// }
//
// if (randArray[0] > randArray[1]) {
//   document.getElementById("title").innerHTML = "Player 1 Wins";
// } else if (randArray[0] === randArray[1]) {
//   document.getElementById("title").innerHTML = "Nobody Wins, Please Play again!";
// } else {
//   document.getElementById("title").innerHTML = "Player 2 Wins";
// }
