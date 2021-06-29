const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who is the first American woman in space? ";
let correctAnswer;
let candidateAnswer;
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers;
var questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ", "What is (5 + 3)/2 * 10 = ?	", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	", "What is the minimum crew size for the ISS? "];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question("Please enter your name: ");
   console.log(`Grand risings and salutations ${candidateName}` + ` Let's play a game shall we! `);
  return candidateName ;

}


function askQuestion() {
  //question = input.question("Who was the first American woman in space? ");
  //console.log(question);
  for (let i = 0; i < questions.length; i++) {
   input.question(questions[i]);
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer // 

}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //function
if (candidateAnswers === correctAnswers){
  console.log("You're right!")
} else {
  console.log("Wrong answer.")
}

let grade = (correctAnswers * 20);
if (grade >= 80){
  console.log(`Congratulations ${candidateName}, you have passed the game and you may proceed!`)
} else {
  console.log(`Unfourtunately ${candidateName}, you did not pass and may not proceed.`)
}
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};