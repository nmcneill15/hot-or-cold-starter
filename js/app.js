
$(document).ready(function(){
		var ranNum;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		function newGame() {
			$("#guessList").empty();
			$("#count").text(0);
			$("#feedback").text("Make your Guess!");
			ranNum = Math.floor(Math.random() * 100) + 1;
		}

		$("a.new").on("click", function(e) {
			e.preventDefault();
			newGame();
		});


});
