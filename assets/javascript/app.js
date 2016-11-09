<script>

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
var questions {
	// each object has a question string and 4 answer strings
	// q1: [1], q2: [2], q3: [1], q4: [0], q5: [1], q6: [3], q7: [0], q8: [3], q9: [1], q10: [2]
	q1: ["The scientific study of plant life is called what?", "Forestry", "Botany", "Dendrology", "Arbory"];
	q2: ["What is the Texas state plant?", "Aloe Vera", "Texas Yucca", "Prickly Pear Cactus", "Texas Giant Hibiscus"];
	q3: ["What is an heirloom seed?", "A seed that's worth a lot of money.", "A seed from a variety of plant that his been around for many years.", "A seed your grandmother gives you.", "A tomato seed."];
	q4: ["How many plant species on earth are used for medicine?", "70,000", "10,000", "20,000", "30,000"];
	q5: ["Which member of the nightshade family is deadly?", "Tobacco", "Belladonna", "Tabasco", "Eggplant"];
	q6: ["What is the Texas state flower?", "Indian Blanket", "Snapdragon", "Oxblood Lily", "Bluebonnet"];
	q7: ["The Japanese word “sakura” means the blossoming of what kind of tree?", "Cherry Tree", "Japanese Pine", "Hydrangea", "Bonsai Tree"];
	q8: ["How fast does bamboo grow?", "Up to 2 meters a day.", "Up to .5 meters a day.", "Up to 3 meters a day.", "Up to 1 meter a day."];
	q9: ["How many species of edible plants are there on earth", "100,000", "20,000" "80,000", "50,000"];
	q10: ["What Texas plant is used to make Mezcal?", "Furcraeas", "Bromeliad", "Agave", "Aloe Vera"];
}

// create a start button
// this shows on page load

// create a function for questions being revealed and answered
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



</script>