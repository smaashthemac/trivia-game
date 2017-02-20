// press start to start game
// shows one question with a timer for each question
// click on the answer
// new screen shows whether correct or not
// 	if correct, congratulate
// 	if wrong, tell correct answer
// 	have images here
// with no user input it moves on to the next question
// when time remaining runs out the answer screen shows
// 	goes for a while until you get to the last question,
// 	after that the game over page shows
// 		which has the results
// 		and a button to play again
// 		which resets the game and does NOT reload the page
// show the first question by calling the main array.object[index]
	// and display the answers
		// each of which are clickable
			// if they click the answer that is correct,
				// the correct answer page shows
			// if they click on the wrong answer
				// the wrong answer page shows (which does have the right answer)
	// then the next answer page shows and it repeats until the end
// each question has a 30 second timer the shows above the question and answers
// when the timer runs out, they are taken to the wrong answer page

// the final page shows the amount of questions answered correctly
// the amount answered wrong

// has a button to click to restart the game
// on click, everything resets but the page doesn't reload



var panel = $("#quiz-area");
var countStartNumber = 30;

// all questions and answers
var questions = [
	
	{question: "The scientific study of plant life is called what?",
	answers: ["Forestry", "Botany", "Dendrology", "Arbory"],
	correctAnswer: "Botany",
	image: "assets/images/answer1.jpg"},
	
	{question: "What is the Texas state plant?",
	answers: ["Aloe Vera", "Texas Yucca", "Prickly Pear Cactus", "Texas Giant Hibiscus"],
	correctAnswer: "Prickly Pear Cactus",
	image: "assets/images/answer2.jpg"},

	{question: "What is an heirloom seed?",
	answers: ["A seed that is worth a lot of money.", "A seed from a variety of plant that has been around for many years.", "A seed your grandmother gave you.", "A tomato seed."],
	correctAnswer: "A seed from a variety of plant that has been around for many years.",
	image: "assets/images/answer3.jpg"},
	
	{question: "How many plant species on earth are used for medicine?",
	answers: ["70,000", "10,000", "20m,000", "30,000"],
	correctAnswer: "70,000",
	image: "assets/images/answer4.jpg"},

	{question: "Which member of the nightshade family is deadly?",
	answers: ["Tobacco", "Belladonna", "Tabasco", "Eggplant"],
	correctAnswer: "Belladonna",
	image: "assets/images/answer5.jpg"},
	
	{question: "What is the Texas state flower?",
	answers: ["Indian Blanket", "Snapdragon", "Oxblood Lily", "Bluebonnet"],
	correctAnswer: "Bluebonnet",
	image: "assets/images/answer6.jpg"},
	
	{question: "The Japanese word 'sakura' means the blossoming of what kind of tree?",
	answers: ["Cherry Tree", "Japanese Pine", "Hydrangea", "Bonsai Tree"],
	correctAnswer: "Cherry Tree",
	image: "assets/images/answer7.jpg"},
	
	{question: "How fast does bamboo grow?",
	answers: ["Up to 2 meters a day.", "Up to .5 meters a day.", "Up to 3 meters a day.", "Up to 1 meter a day."],
	correctAnswer: "Up to 1 meter a day.",
	image: "assets/images/answer8.jpg"},
	
	{question: "How many species of edible plants are there on earth?",
	answers: ["100,000", "20,000", "80,000", "50,000"],
	correctAnswer: "20,000",
	image: "assets/images/answer9.jpg"},
	
	{question: "What Texas plant is used to make Mezcal?",
	answers: ["Furcraeas", "Bromeliad", "Agave", "Aloe Vera"],
	correctAnswer: "Agave",
	image: "assets/images/answer10.jpg"},
];

// variable to hold setInterval
var timer;
var game = {

	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("Time's up");
			game.timeUp();
		}
	}, 

	loadQuestion: function() {
		timer = setInterval(game.countdown, 1000);
		panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

		for (var i=0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button");
		}
	},

	nextQuestion: function() {
		game.counter = countStartNumber;
		$("#counter-number").html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},

	timeUp: function() {
		clearInterval(timer);
		$("#counter-number").html(game.counter);

		panel.html("<h2>Out of Time!</h2>");
		panel.append("<h3>The correct answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
		panel.append("<img src='" + questions[this.currentQuestion].image + "'/>");

		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000);
		}
		else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},

	results: function() {
		clearInterval(timer);
		panel.html("<h2>All done! Here's how you did.</h2>");
		$("counter-number").html(game.counter);

		panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
    	panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    	panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    	panel.append("<br><button id='start-over'>Start Over?</button>");
  	},

  	clicked: function(e) {
  		clearInterval(timer);
  		if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
  			this.answeredCorrectly();
  		}
  		else {
  			this.answeredIncorrectly();
  		}
  	},

  	answeredIncorrectly: function() {
  		game.incorrect++;
  		clearInterval(timer);

  		panel.html("<h2>Nope!</h2>");
    	panel.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    	panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

    	if (game.currentQuestion === questions.length - 1) {
    		setTimeout(game.results, 3 * 1000);
    	}
    	else {
    		setTimeout(game.nextQuestion, 3 * 1000);
    	}
  	},

  	answeredCorrectly: function() {

	    clearInterval(timer);

	    game.correct++;

	    panel.html("<h2>Correct!</h2>");
	    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");

	    if (game.currentQuestion === questions.length - 1) {
	      setTimeout(game.results, 3 * 1000);
	    }
	    else {
	      setTimeout(game.nextQuestion, 3 * 1000);
	    }
  	},

  	reset: function() {
  		this.currentQuestion = 0;
  		this.counter = countStartNumber;
  		this.correct = 0;
  		this.incorrect = 0;
  		this.loadQuestion();
  	}
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
