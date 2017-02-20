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


// all questions and answers
var qa = [
	
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

// the counter to display 30 seconds to start; will be decremented to show how much time remains
var number = 10;
var currentQuestionIndex = 0;

// create a start button
// on click, replaces div with first question
$(".btn").on("click", function() {
	displayQuestion(currentQuestionIndex);
});

function tenSeconds() {
	console.log("ten seconds triggered");
	displayQuestion(currentQuestionIndex);
}

// run game function starts the 20 second timer that displays on the first question
function runGame(){
	counter = setInterval(decrement, 1000);
}

// function cycles through index questions and their answers
function plusPlus(){
	currentQuestionIndex++;
};

// decrement timer function
function decrement() {
	// decrease number by one
	number--;
	// show the number in the timer div
	$("#timer").html("<h5><br>You have " + number + " seconds remaining</h5>");
	// once number hits 0...
	if (number === 0) {
		plusPlus();
		$("#question").html("<br><h4>Time's Up!</h4><br>");
		$("#question").append("<p>The answer was " + qa[0].correct + ".</p>")
		$("#question").append("<p><br><img src='assets/images/answer1.jpg' /></p>")
		$("#option1").html("");
		$("#option2").html("");
		$("#option3").html("");
		$("#option4").html("");
		$("#timer").html("");
		setTimeout(tenSeconds, 10000);
		clearInterval(counter);
		number = 10
	}
}

// create a function for questions being revealed and answered
function displayQuestion(index) {
	$("#question").html("<h2>" + qa[index].question + "</h2><br>");
	$("#option1").html("<p>" + qa[index].answers[0] + "<p>");
	$("#option2").html("<p>" + qa[index].answers[1] + "<p>");
	$("#option3").html("<p>" + qa[index].answers[2] + "<p>");
	$("#option4").html("<p>" + qa[index].answers[3] + "<p>");
		runGame();
};

// create a function for clicking the correct answer - (resolve where it prints though)
$("#option2").on("click", function() {
		setTimeout(tenSeconds, 10000);
		clearInterval(counter);
		number = 10
		plusPlus();
		$("#game").html("<br><h4>Great Job!</h4><br>");
		$("#game").append("<p>The answer is " + qa[0].correct + ".</p>")
		$("#game").append("<p><br><img src='assets/images/answer1.jpg' /></p>")
	});

// create a function for clicking incorrect answers - (resolve this for reuse re: different divs)
$("#option1").on("click", function() {
		$("#game").html("<br><h4>Sorry!</h4><br>");
		$("#game").append("<p>The answer is " + qa[0].correct + ".</p>")
		$("#game").append("<p><br><img src='assets/images/answer1.jpg' /></p>")
	});
$("#option3").on("click", function() {
		$("#game").html("<br><h4>Sorry!</h4><br>");
		$("#game").append("<p>The answer is " + qa[0].correct + ".</p>")
		$("#game").append("<p><br><img src='assets/images/answer1.jpg' /></p>")
	});
$("#option4").on("click", function() {
		$("#game").html("<br><h4>Sorry!</h4><br>");
		$("#game").append("<p>The answer is " + qa[0].correct + ".</p>")
		$("#game").append("<p><br><img src='assets/images/answer1.jpg' /></p>")
	});



	// show the first question by calling the main array.object[index]

	// and display the answers
		// each of which are clickable
			// if they click the answer that is correct,
				// the correct answer page shows
			// if they click on the wrong answer
				// the wrong answer page shows (which does have the right answer)
	// then the next answer page shows and it repeats until the end
//}
// each question has a 30 second timer the shows above the question and answers
// when the timer runs out, they are taken to the wrong answer page

// the final page shows the amount of questions answered correctly
// the amount answered wrong

// has a button to click to restart the game
// on click, everything resets but the page doesn't reload

	





