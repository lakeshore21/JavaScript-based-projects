var maxNumOfSquares = 6; // capacity, the game can support 6 squares at most
var numOfSquares = maxNumOfSquares;
var defaultBackgroundColor = "#232323"; // background color of the game board
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// reset the game
resetButton.addEventListener("click", function() {
	initializeGame();
	resetButton.textContent = "New Colors";
});

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		initializeGame();
		for (var j = 0; j < modeButtons.length; j++)
			modeButtons[j].classList.remove("selected");
		this.classList.add("selected");
	});
}

colorDisplay.textContent = pickedColor; // display the picked color at the top of the page

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) { // if the guess is correct, change the color of all squares and the top stripe
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			messageDisplay.textContent = "Try Again.";
			this.style.backgroundColor = defaultBackgroundColor; // if guess a wrong color, dissolve it
		}
	});
}

// initialziation
function initializeGame() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < maxNumOfSquares; i++) { // assign a color for each square
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			if (squares[i].style.display == "none")
				squares[i].style.display = "block";
		}
		else
			squares[i].style.display = "none";
	}
}

// change the color of every sqaure to be the same with the picked color
function changeColors(color) {
	for (var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = color;
}

// pick the target color
function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

// get random colors for the squares 
function generateRandomColors(num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		array.push(getRandomColor());
	}
	return array;
}

// randomly generate a rgb color
function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}