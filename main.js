// HTML quiz
const htmlQuizButton = document.getElementById("html-quiz");
const htmlQuizContainer = document.getElementById("html-quiz-container");
const htmlQuizForm = document.getElementById("html-quiz-form");
const htmlQuizScore = document.getElementById("html-quiz-score");

const htmlQuizQuestions = [
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyper Technology Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "What is the correct way to define a hyperlink in HTML?",
    choices: [
      { text: '&lt;a href="http://www.example.com"&gt;Example&lt;/a&gt;', correct: true },
      { text: '&lt;link rel="stylesheet" href="style.css"&gt;', correct: false },
      { text: "&lt;p&gt;This is a paragraph&lt;/p&gt;", correct: false },
    ],
  },
  {
    question: "Which tag is used to define a table in HTML?",
    choices: [
      { text: "&lt;table&gt;", correct: true },
      { text: "&lt;tr&gt;", correct: false },
      { text: "&lt;td&gt;", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid input type in HTML?",
    choices: [
      { text: "email", correct: false },
      { text: "select", correct: true },
      { text: "checkbox", correct: false },
    ],
  },
  {
    question: "Which tag is used to define a list in HTML?",
    choices: [
      { text: "&lt;table&gt;", correct: false },
      { text: "&lt;ol&gt;", correct: true },
      { text: "&lt;ul&gt;", correct: false },
    ],
  },
];

htmlQuizButton.addEventListener("click", () => {
  htmlQuizContainer.style.display = "block";
});

htmlQuizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  for (let i = 0; i < htmlQuizQuestions.length; i++) {
    const question = htmlQuizQuestions[i];

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const radio = htmlQuizForm.elements[`q${i + 1}`][j];

      if (radio.checked && choice.correct) {
        score++;
        break;
      }
    }
  }

  const percentage = Math.round((score / htmlQuizQuestions.length) * 100);
  htmlQuizScore.textContent = `You scored ${score} out of ${htmlQuizQuestions.length}, which is ${percentage}%.`;
  htmlQuizScore.style.display = "block";
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function navbar(toggle){
   var x = document.getElementById(toggle);
   if(toggle=="thisone"){
    var i = document.getElementById("thatone");
   }
   else{
    var i = document.getElementById("thisone");
   }

   x.style.transition= ".3s";
   if (x.style.opacity == 0) {
    if(i.style.opacity == 1){
      i.style.opacity = 0;
      i.style.height = 0;
    }
    x.style.opacity = 1;
    x.style.height = "auto";
  } else {
    x.style.opacity = 0;
    x.style.height = 0;
  }
    
  }
