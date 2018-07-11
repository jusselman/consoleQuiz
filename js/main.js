

(function() {

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
Question.prototype.displayQuestion = function() {

    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans, callback) {
  var sc;
    if (ans === this.correct) {
      console.log('Correct Answer!!');
      sc = callback(true);

    } else {
      console.log("Wrong Wrong Wrong");

      sc = callback(false);
    }

    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
  console.log("Your current score is: " + score);
  console.log('--------------------------------------------')
}

var q1 = new Question('Is Javascript the coolest language?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Mary', 'Josue'], 2);

var q3 = new Question('What adjective best describes coding?', ['Boring', 'Fun', 'Insane', 'Tedious'], 3);

var q4 = new Question('Which of the following is a js primitive?', ['Array', 'Console', 'String', 'Integer'], 2);

var q5 = new Question('What describes common JS binary?', ['Object', 'Primitive', 'Null', 'Boolean'], 3);


var questions = [q1, q2, q3, q4];

function score() {
  var sc = 0;
  return function(correct) {
    if (correct) {
      sc++;
    }
    return sc;
  }
}
var scoreKeeper = score();

function nextQuestion() {

  var n = Math.floor(Math.random() * 3);

questions[n].displayQuestion();

var answer = prompt('Please select the correct answer from the console, not from this blank browser screen.');

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer),scoreKeeper);

      nextQuestion()
    }


}
nextQuestion();


}());





























//
