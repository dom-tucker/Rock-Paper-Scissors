/* PROCESS:
 1. Establish three Button-Images player can choose from: Rock, Paper or Scissors [DONE]
 2. Establish AI-selection of a random button. [DONE]
     a. Random number generator between 1 - 3  [DONE]
     b. Random number corresponds to rock, paper scissor image  [DONE]
     c. Bonus: The AI selected image appears.
3. Human and AI selection are evaluated against one another.
     a. Save Human selection as a variable
     b. Save AI selection as a variable.
     c. Use if/else logic to determine victor.
4. Victory/Game Over window pops up detailing result.
*/

var humanSelection = 'placeholder';
var aiChoice = 'placeholder';

//Searches for element with rock class, adds click event to it and when click runs rockClicked function.
document.querySelector(".rock").addEventListener("click", rockClicked);
function rockClicked(){ //rockClicked function used only to run other functions.
  clickEvent();         //function that makes the AI choice
  humanSelectedRock();  //function that saves player choice to a variable.
}

document.querySelector(".paper").addEventListener("click", paperClicked);
function paperClicked(){
  clickEvent();
  humanSelectedPaper();
}

document.querySelector(".scissors").addEventListener("click", scissorClicked);
function scissorClicked(){
  clickEvent();
  humanSelectedScissors();
}


//Function that generates a random number,
function clickEvent() {
 var randomNumberGenerator = Math.floor(Math.random() * 3) + 1;

//Pairs that random number with a button choice; 1 = rock, 2 = paper, 3 = scissors.
 if (randomNumberGenerator == 1) {
   let aiChoice = "rock";
   alert("AI chooses rock");
 } else if (randomNumberGenerator == 2) {
   let aiChoice = "paper";
   alert("AI chooses paper");
 } else {
   let aiChoice = "scissors";
   alert("AI chooses scissors");
 }
}

//if player chose rock, humanSelectionRock() saves rock to a variable to be evaulated against ai choice.
function humanSelectedRock() {
  var humanSelection = 'rock';
  console.log(humanSelection);
}

function humanSelectedPaper() {
  var humanSelection = 'paper';
  console.log(humanSelection);
}

function humanSelectedScissors() {
  var humanSelection = 'scissors';
  console.log(humanSelection);
}


/*
  if (humanSelection && aiChoice == "rock") {
    alert("its a tie");
    console.log("both chose rock, tie");
  } else if (humanSelection == "rock" && aiChoice == "paper") {
    alert("human player loses");
    console.log("human player loses");
  } else {
    alert("human player wins");
    console.log("human player wins");
  }
  */


//try putting humanSelectedRock, Paper and Scissor into clickEvent
