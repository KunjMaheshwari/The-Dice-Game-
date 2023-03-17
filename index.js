// for dice 1
var randomNumber1 = Math.floor(Math.random() * (6) + 1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


// for dice 2 
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


// changing title on refresh

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins! 🥂";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🥂";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}