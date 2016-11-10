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


// create an array with objects
// var questions = [
// 	// each object has a question string and 4 answer strings
// 	// index answers: q1: [1], q2: [2], q3: [1], q4: [0], q5: [1], q6: [3], q7: [0], q8: [3], q9: [1], q10: [2]
// 	{q1: "The scientific study of plant life is called what?" a1: "Forestry" a2: "Botany" a3: "Dendrology" a4: "Arbory"},
// 	{q2: "What is the Texas state plant?", a1: "Aloe Vera", a2: "Texas Yucca", a3: "Prickly Pear Cactus", a4: "Texas Giant Hibiscus"},
// 	{q3: "What is an heirloom seed?", a1: "A seed that's worth a lot of money.", a2: "A seed from a variety of plant that his been around for many years.", a3: "A seed your grandmother gives you.", a4: "A tomato seed."},
// 	{q4: "How many plant species on earth are used for medicine?", a1: "70,000", a2: "10,000", a3: "20,000", a4: "30,000"},
// 	{q5: "Which member of the nightshade family is deadly?", a1: "Tobacco", a2: "Belladonna", a3: "Tabasco", a4: "Eggplant"},
// 	{q6: "What is the Texas state flower?", a1: "Indian Blanket", a2: "Snapdragon", a3: "Oxblood Lily", a4: "Bluebonnet"},
// 	{q7: "The Japanese word “sakura” means the blossoming of what kind of tree?", a1: "Cherry Tree", a2: "Japanese Pine", a3: "Hydrangea", a4:"Bonsai Tree"},
// 	{q8: "How fast does bamboo grow?", a1: "Up to 2 meters a day.", a2: "Up to .5 meters a day.", a3: "Up to 3 meters a day.", a4: "Up to 1 meter a day."},
// 	{q9: "How many species of edible plants are there on earth", a1: "100,000", a2: "20,000", a3: "80,000", a4: "50,000"},
// 	{q10: "What Texas plant is used to make Mezcal?", a1: "Furcraeas", a2: "Bromeliad", a3: "Agave", a4: "Aloe Vera"},
// ];

var q1 = {
	question: "The scientific study of plant life is called what?",
	a1: "Forestry",
	a2: "Botany",
	a3: "Dendrology",
	a4: "Arbory"
}
var q2 = {
	question: "What is the Texas state plant?",
	a1: "Aloe Vera",
	a2: "Texas Yucca",
	a3: "Prickly Pear Cactus",
	a4: "Texas Giant Hibiscus"
}
var q3 = {
	question: "What is an heirloom seed?",
	a1: "A seed that is worth a lot of money.",
	a2: "A seed from a variety of plant that has been around for many years.",
	a3: "A seed your grandmother gave you.",
	a4: "A tomato seed."
}
var q4 = {
	question: "How many plant species on earth are used for medicine?",
	a1: "70,000",
	a2: "10,000",
	a3: "20m,000",
	a4: "30,000"
}
var q5 = {
	question: "Which member of the nightshade family is deadly?",
	a1: "Tobacco",
	a2: "Belladonna",
	a3: "Tabasco",
	a4: "Eggplant"
}
var q6 = {
	question: "What is the Texas state flower?",
	a1: "Indian Blanket",
	a2: "Snapdragon",
	a3: "Oxblood Lily",
	a4: "Bluebonnet"
}
var q7 = {
	question: "The Japanese word 'sakura' means the blossoming of what kind of tree?",
	a1: "Cherry Tree",
	a2: "Japanese Pine",
	a3: "Hydrangea",
	a4: "Bonsai Tree"
}
var q8 = {
	question: "How fast does bamboo grow?",
	a1: "Up to 2 meters a day.",
	a2: "Up to .5 meters a day.",
	a3: "Up to 3 meters a day.",
	a4: "Up to 1 meter a day."
}
var q9 = {
	question: "How many species of edible plants are there on earth?",
	a1: "100,000",
	a2: "20,000",
	a3: "80,000",
	a4: "50,000"
}
var q10 = {
	question: "What Texas plant is used to make Mezcal?",
	a1: "Furcraeas",
	a2: "Bromeliad",
	a3: "Agave",
	a4: "Aloe Vera"
}

// create a start button (this exists on html and will be replaced with each question)
// on click, replaces div with first question
$(".btn").on("click", function() {
	displayQuestion(q1);
});

// create a function for questions being revealed and answered
function displayQuestion(q) {
	$("#question").html("<h2>" + q.question + "</h2><br>");
	$("#option1").html("<p>" + q.a1 + "<p>");
	$("#option2").html("<p>" + q.a2 + "<p>");
	$("#option3").html("<p>" + q.a3 + "<p>");
	$("#option4").html("<p>" + q.a4 + "<p>");
}

// create a function for clicking the correct answer - (resolve where it prints though)
// function correctAnswer() {
// 	$("#option2").on("click", function() {
// 		$("#game").html("Great job! The answer is " + q1.a2);
// 	});
// }
// correctAnswer();

// create a function for clicking answers - (resolve this for reuse re: different divs)
if ($("#option2").on("click")) {
	$("#game").html("Great job! The answer is " + q1.a2);
} else if ($("#option1").on("click")) {
	$("#game").html("Sorry, the answer is " + q1.a2);
} else if ($("#option3").on("click")) {
	$("#game").html("Sorry, the answer is " + q1.a2);
} else {
	$("#game").html("Sorry, the answer is " + q1.a2);
}





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
