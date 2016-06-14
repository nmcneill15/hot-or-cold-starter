
var ranNum = Math.floor(Math.random() * 100) + 1;
var range = 30;
var guessRange = getRange(range, ranNum);
var guessNumber = 0;
var prevGuess;

function newGame() {
	$("#guessList").empty();
	$("#count").text(0);
	$("#feedback").text("Make your Guess!");
	ranNum = Math.floor(Math.random() * 100) + 1;
	guessRange = getRange(range, ranNum);
	guessNumber = 0;
	userGuess = undefined;
}

function getRange(range, ranNum) {
	var lowerLimit;
	var upperLimit;
	if (ranNum - (range / 2) < 1) {
		lowerLimit = 0;
	} else {
		lowerLimit = ranNum - (range / 2);
	}
	if (ranNum + (range / 2) > 100) {
		upperLimit = 100;
	} else {
		upperLimit = ranNum + (range / 2);
	}
	guessRange = [];
	guessRange.push(lowerLimit);
	guessRange.push(upperLimit);
	return guessRange;
}

$("a.new").on("click", function(e) {
	e.preventDefault();
	newGame();
});

function guessCounter() {
	guessNumber++;
	$("#count").text(guessNumber);
}

$("#form").on("submit", function(e) {
	e.preventDefault();
	var guess = parseInt($("#userGuess").val());
	console.log(guess);
	guessCounter();
	compareGuess(guess);
	$("#userGuess").val("").focus();
	prevGuess = guess;
});

function compareGuess(guess) {
		if (guess > 100 || guess < 0 || isNaN(guess)) {
			$("#feedback").text("Your guess must be between 1 and 100");
			console.log("Your guess must be between 1 and 100");
		} else if (guess === ranNum) {
			$("#feedback").text("Congratulations! You've guessed Correctly");
			$("#guessList").append("<li>" + guess + "</li>");
			console.log("You've guessed correctly");
		} else if (guess < guessRange[0] || guess > guessRange[1]) {
			if (guessNumber === 1){
				$("#feedback").text("Ice Cold").css("background-color", "lightblue");
				console.log("guessNumber is 1: cold");
			} else if (Math.abs(ranNum - guess) < Math.abs(ranNum - prevGuess)) {
				$("#feedback").text("Cold...but Warmer").css("background-color", "lightblue");
				console.log("Cold...but warmer");
			} else if (Math.abs(ranNum - guess) > Math.abs(ranNum - prevGuess)) {
				$("#feedback").text("Ice Cold...er").css("background-color", "blue");
				console.log("Ice Cold...er");
			}
			$("#guessList").append("<li>" + guess + "</li>");
			console.log("Ice Cold");
		} else if (guess > guessRange[0] && guess < guessRange[1]) {
			if (guessNumber === 1) {
				$("#feedback").text("Warm").css("background-color", "#cc324b");
			} else if (Math.abs(ranNum - guess) > Math.abs(ranNum - prevGuess)) {
				$("#feedback").text("Warm...but Colder").css("background-color", "#cc324b");
			} else if (Math.abs(ranNum - guess) < Math.abs(ranNum - prevGuess)) {
				$("#feedback").text("Hotter").css("background-color", "red");
			}
			$("#guessList").append("<li>" + guess + "</li>");
			console.log("Warm");
		} else {
			console.log("something went wrong");
		}
}



/*--- Display information modal box ---*/
$(".what").click(function(){
	$(".overlay").fadeIn(1000);

});

/*--- Hide information modal box ---*/
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});
