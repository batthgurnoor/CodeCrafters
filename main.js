/* // HTML quiz */ const htmlOverallQuestions = [  {
    question: "Which HTML attribute is used to specify the URL of the page that the hyperlink goes to?",
    choices: [
      { text: "href", correct: true },
      { text: "src", correct: false },
      { text: "alt", correct: false },
      { text: "class", correct: false },
    ],
  },
  {
    question: "What is the purpose of the HTML <table> tag?",
    choices: [
      { text: "To define a table of data.", correct: true },
      { text: "To create a hyperlink.", correct: false },
      { text: "To create a list of items.", correct: false },
      { text: "To add an image to a web page.", correct: false },
    ],
  },
  {
    question: "What is the correct way to define a table row in HTML?",
    choices: [
      { text: "<tr></tr>", correct: true },
      { text: "<td></td>", correct: false },
      { text: "<th></th>", correct: false },
      { text: "<table></table>", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to specify the size of an image?",
    choices: [
      { text: "width", correct: true },
      { text: "height", correct: false },
      { text: "alt", correct: false },
      { text: "src", correct: false },
    ],
  },
  {
    question: "Which HTML heading tag is used to define the main heading or title of a document?",
    choices: [
      { text: "<h1>", correct: true },
      { text: "<h2>", correct: false },
      { text: "<h3>", correct: false },
      { text: "<h4>", correct: false },
    ],
  },
  {
    question: "What are HTML headings?",
    choices: [
      { text: "HTML tags used to define the headings or titles of a document or section.", correct: true },
      { text: "HTML tags used to create links between web pages.", correct: false },
      { text: "HTML tags used to create lists of items.", correct: false },
      { text: "HTML tags used to create tables of data.", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid HTML heading tag?",
    choices: [
      { text: "<h1>", correct: false },
      { text: "<h3>", correct: false },
      { text: "<h6>", correct: false },
      { text: "<heading>", correct: true },
    ],
  },
  {
    question: "What is the correct syntax for adding an image in HTML?",
    choices: [
      { text: "<link rel='stylesheet' href='style.css'>", correct: false },
      { text: '<img alt="Description of image" src="image.jpg">', correct: true },
      { text: '<img description="Description of image" src="image.jpg">', correct: false },
      { text: '<img url="image.jpg" alt="Description of image">', correct: false },
    ],
  },
  {
    question: "Which attribute is used to define the URL of a hyperlink in HTML?",
    choices: [
      { text: "src", correct: false },
      { text: "href", correct: true },
      { text: "link", correct: false },
      { text: "url", correct: false },
    ],
  },
  {
    question: "What does the 'alt' attribute in an image tag do in HTML?",
    choices: [
      { text: "It defines the alignment of the image on the page.", correct: false },
      { text: "It defines the size of the image.", correct: false },
      { text: "It provides a text description of the image for accessibility purposes.", correct: true },
      { text: "It sets the background color of the image.", correct: false },
    ],
  },
];

const htmlBasicQuestions = [
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "A) Hypertext Markup Language", correct: true },
      { text: "B) Hyper Technology Markup Language", correct: false },
      { text: "C) Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "What is the basic structure of an HTML document?",
    choices: [
      { text: "A) <!DOCTYPE html> <html> <head> </head> <body> </body> </html>", correct: true },
      { text: "B) <html> <head> <body> </body> </head> <!DOCTYPE html> </html>", correct: false },
      { text: "C) <!DOCTYPE html> <head> </head> <body> </body>", correct: false },
    ],
  },
  {
    question: "What is the purpose of HTML tags?",
    choices: [
      { text: "A) To provide structure and semantics to the content of a web page.", correct: true },
      { text: "B) To change the visual appearance of a web page.", correct: false },
      { text: "C) To create animations on a web page.", correct: false },
    ],
  },
  {
    question: "What is the correct way to create a hyperlink in HTML?",
    choices: [
      { text: "A) <a href='http://www.example.com'>Example</a>", correct: true },
      { text: "B) <link rel='stylesheet' href='style.css'>", correct: false },
      { text: "C) <p>This is a paragraph</p>", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
    choices: [
      {
        text: "A) To provide alternative text for the image, which can be read by screen readers or displayed in case the image fails to load.",
        correct: true,
      },
      { text: "B) To specify the URL of the image.", correct: false },
      { text: "C) To set the width and height of the image.", correct: false },
    ],
  },
];

const htmlAttributeQuestions = [
  {
    question: "What are HTML attributes?",
    choices: [
      { text: "HTML attributes provide additional information about an HTML element.", correct: true },
      { text: "HTML attributes are used to define the structure of an HTML document.", correct: false },
      { text: "HTML attributes are used to create interactive elements in an HTML document.", correct: false },
      { text: "HTML attributes are used to create animations in an HTML document.", correct: false },
    ],
  },
  {
    question: "What is the 'id' attribute used for in HTML?",
    choices: [
      { text: "To give an element a unique identifier.", correct: true },
      { text: "To add a class to an element.", correct: false },
      { text: "To specify the source of an image.", correct: false },
      { text: "To create a hyperlink to another web page.", correct: false },
    ],
  },
  {
    question: "What is the 'href' attribute used for in an HTML hyperlink?",
    choices: [
      { text: "To specify the URL of the web page that the hyperlink leads to.", correct: true },
      { text: "To specify the color of the hyperlink.", correct: false },
      { text: "To give the hyperlink a unique identifier.", correct: false },
      { text: "To set the width and height of the hyperlink.", correct: false },
    ],
  },
  {
    question: "What is the 'src' attribute used for in an HTML image tag?",
    choices: [
      { text: "To specify the URL of the image.", correct: true },
      { text: "To give the image a unique identifier.", correct: false },
      { text: "To add a class to the image.", correct: false },
      { text: "To create a hyperlink to another web page.", correct: false },
    ],
  },
  {
    question: "What is the 'alt' attribute used for in an HTML image tag?",
    choices: [
      {
        text: "To provide alternative text for the image, which can be read by screen readers or displayed in case the image fails to load.",
        correct: true,
      },
      { text: "To specify the URL of the image.", correct: false },
      { text: "To set the width and height of the image.", correct: false },
      { text: "To give the image a unique identifier.", correct: false },
    ],
  },
];

const htmlHeadingQuestions = [
  {
    question: "What are HTML headings?",
    choices: [
      { text: "HTML tags used to define the headings or titles of a document or section.", correct: true },
      { text: "HTML tags used to create links between web pages.", correct: false },
      { text: "HTML tags used to create lists of items.", correct: false },
      { text: "HTML tags used to create tables of data.", correct: false },
    ],
  },
  {
    question: "Which HTML heading tag is used to define the main heading or title of a document?",
    choices: [
      { text: "<h1>", correct: true },
      { text: "<h2>", correct: false },
      { text: "<h3>", correct: false },
      { text: "<h4>", correct: false },
    ],
  },
  {
    question: "Which HTML heading tag is used to define a subheading or section title?",
    choices: [
      { text: "<h2>", correct: true },
      { text: "<h1>", correct: false },
      { text: "<h3>", correct: false },
      { text: "<h4>", correct: false },
    ],
  },
  {
    question: "How many levels of HTML headings are there?",
    choices: [
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "What is the purpose of using headings in HTML?",
    choices: [
      { text: "To provide a structure and hierarchy to the content of a web page.", correct: true },
      { text: "To create links between web pages.", correct: false },
      { text: "To display images or videos on a web page.", correct: false },
      { text: "To add styling or formatting to the text on a web page.", correct: false },
    ],
  },
];

const cssSyntaxQuestions = [
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Cursive Style Sheets", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid CSS property?",
    choices: [
      { text: "font-style", correct: true },
      { text: "text-color", correct: false },
      { text: "background-image", correct: true },
      { text: "border-shadow", correct: false },
    ],
  },
  {
    question: "How do you select an element with an ID in CSS?",
    choices: [
      { text: "#elementID", correct: true },
      { text: ".elementID", correct: false },
      { text: "*elementID", correct: false },
      { text: "<elementID>", correct: false },
    ],
  },
  {
    question: "How do you select all paragraph elements on a page in CSS?",
    choices: [
      { text: "p", correct: true },
      { text: "para", correct: false },
      { text: "p.all", correct: false },
      { text: "paragraph", correct: false },
    ],
  },
  {
    question: "How do you apply CSS to an HTML document?",
    choices: [
      { text: "Using the <style> tag in the <head> section of the HTML document", correct: true },
      { text: "Using the <link> tag in the <body> section of the HTML document", correct: false },
      { text: "Using the <script> tag in the <head> section of the HTML document", correct: false },
      { text: "Using the <css> tag in the <head> section of the HTML document", correct: false },
    ],
  },
];

const cssColorQuestions = [
  {
    question: "Which of the following is NOT a valid color keyword in CSS?",
    choices: [
      { text: "red", correct: false },
      { text: "purple", correct: false },
      { text: "turquoise", correct: false },
      { text: "hamburger", correct: true },
    ],
  },
  {
    question: "What is the hexadecimal value for the color white in CSS?",
    choices: [
      { text: "#FFFFFF", correct: true },
      { text: "#000000", correct: false },
      { text: "#00FF00", correct: false },
      { text: "#0000FF", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the background color of an element to blue?",
    choices: [
      { text: "background-color: blue", correct: true },
      { text: "background-color: #0000FF", correct: true },
      { text: "background: blue", correct: false },
      { text: "color: blue", correct: false },
    ],
  },
  {
    question: "What is the RGB value for the color magenta?",
    choices: [
      { text: "rgb(255, 0, 255)", correct: true },
      { text: "rgb(255, 255, 0)", correct: false },
      { text: "rgb(0, 255, 255)", correct: false },
      { text: "rgb(128, 0, 128)", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the text color of an element to red?",
    choices: [
      { text: "text-color: red", correct: false },
      { text: "color: red", correct: true },
      { text: "font-color: red", correct: false },
      { text: "background-color: red", correct: false },
    ],
  },
];

const cssBorderQuestions = [
  {
    question: "Which of the following is NOT a valid border style in CSS?",
    choices: [
      { text: "solid", correct: false },
      { text: "groove", correct: false },
      { text: "zigzag", correct: true },
      { text: "dotted", correct: false },
    ],
  },
  {
    question: "What is the default color of a border in CSS?",
    choices: [
      { text: "black", correct: true },
      { text: "white", correct: false },
      { text: "gray", correct: false },
      { text: "transparent", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the border width of an element to 5 pixels?",
    choices: [
      { text: "border: 5", correct: false },
      { text: "border-width: 5px", correct: true },
      { text: "border-size: 5", correct: false },
      { text: "border-thickness: 5px", correct: false },
    ],
  },
  {
    question: "What is the default value for the border-style property in CSS?",
    choices: [
      { text: "none", correct: false },
      { text: "hidden", correct: false },
      { text: "solid", correct: true },
      { text: "dashed", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the border color of an element to red?",
    choices: [
      { text: "border: red", correct: false },
      { text: "border-color: red", correct: true },
      { text: "border-style: red", correct: false },
      { text: "border-width: red", correct: false },
    ],
  },
];

const cssQuizQuestions = [
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style Systems", correct: false },
      { text: "Computer Style Standards", correct: false },
      { text: "Colorful Style Schemes", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid CSS length unit?",
    choices: [
      { text: "px", correct: false },
      { text: "em", correct: false },
      { text: "in", correct: false },
      { text: "kg", correct: true },
    ],
  },
  {
    question: "Which property is used to set the background color of an element in CSS?",
    choices: [
      { text: "background-image", correct: false },
      { text: "background-color", correct: true },
      { text: "background-repeat", correct: false },
      { text: "background-position", correct: false },
    ],
  },
  {
    question: "What is the correct way to set the font-size of an element to 16 pixels?",
    choices: [
      { text: "font-size: 16", correct: false },
      { text: "font-size: 16px", correct: true },
      { text: "font-size: 16pt", correct: false },
      { text: "font-size: 16em", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the color of text to blue in CSS?",
    choices: [
      { text: "color: #0000ff", correct: true },
      { text: "color: blue", correct: true },
      { text: "color: rgb(0,0,255)", correct: true },
      { text: "color: 0000ff", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the border style of an element to dotted?",
    choices: [
      { text: "border-style: dashed", correct: false },
      { text: "border-style: dotted", correct: true },
      { text: "border-style: solid", correct: false },
      { text: "border-style: double", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to set the border width of an element to 2 pixels?",
    choices: [
      { text: "border: 2", correct: false },
      { text: "border-width: 2px", correct: true },
      { text: "border-size: 2", correct: false },
      { text: "border-thickness: 2px", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid border style in CSS?",
    choices: [
      { text: "solid", correct: false },
      { text: "groove", correct: false },
      { text: "zigzag", correct: true },
      { text: "dotted", correct: false },
    ],
  },
  {
    question: "What is the default value for the border-style property in CSS?",
    choices: [
      { text: "none", correct: false },
      { text: "hidden", correct: false },
      { text: "solid", correct: true },
      { text: "dashed", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid way to select all paragraph elements in CSS?",
    choices: [
      { text: "p { }", correct: true },
      { text: ".p { }", correct: false },
      { text: "#p { }", correct: false },
      { text: "<p> { }", correct: false },
    ],
  },
];

function checkScore(event) {
  event.preventDefault();
  var questions = 0;
  var toggle = event.target.id;
  switch (toggle) {
    case "html_basicsQuiz":
      questions = htmlBasicQuestions;
      console.log(toggle);
      break;
    case "html_attributesQuiz":
      questions = htmlAttributeQuestions;
      console.log(toggle);
      break;
    case "html_headingsQuiz":
      questions = htmlHeadingQuestions;
      console.log(toggle);
      break;
    case "html_overallQuiz":
      questions = htmlOverallQuestions;
      console.log(toggle);
      break;
    case "css_syntaxQuiz":
      questions = cssSyntaxQuestions;
      console.log(toggle);
      break;
    case "css_colorsQuiz":
      questions = cssColorQuestions;
      console.log(toggle);
      break;
    case "css_bordersQuiz":
      questions = cssBorderQuestions;
      console.log(toggle);
      break;
    default:
      questions = cssQuizQuestions;
      console.log(toggle);
      break;
  }
  var score = 0;
  var QuizForm = document.getElementById(toggle + "-form");
  for (let i = 0; i < questions.length; i++) {
    var question = questions[i];

    for (let j = 0; j < question.choices.length; j++) {
      var choice = question.choices[j];
      var radio = QuizForm.elements[`q${i + 1}`][j];

      if (radio.checked && choice.correct) {
        score++;
        break;
      }
    }
  }

  var percentage = Math.round((score / questions.length) * 100);
  if (window.confirm("Are You Sure you want to submit the quiz?")) {
    console.log("yes");
    showScore(percentage, toggle);
  }
}

function showScore(percentage, toggle) {
  if (window.confirm("Congrats You Scored " + percentage + "% in this quiz\nDo you want to take this quiz again?")) {
    console.log("yes");
    location.reload();
  } else {
    switch (toggle) {
      case "html_basicsQuiz":
      case "html_attributesQuiz":
      case "html_headingsQuiz":
      case "html_overallQuiz":
        display_nav("html_intro");
        break;
      case "css_syntaxQuiz":
      case "css_colorsQuiz":
      case "css_bordersQuiz":
      case "css_overallQuiz":
        display_nav("css_intro");
        break;
    }
  }
}

/* htmlQuizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  for (let i = 0; i < htmlOverallQuestions.length; i++) {
    const question = htmlOverallQuestions[i];

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const radio = htmlQuizForm.elements[`q${i + 1}`][j];

      if (radio.checked && choice.correct) {
        score++;
        break;
      }
    }
  }

  const percentage = Math.round((score / htmlOverallQuestions.length) * 100);
  htmlQuizScore.textContent = `You scored ${score} out of ${htmlOverallQuestions.length}, which is ${percentage}%.`;
  htmlQuizScore.style.display = "block";
}); */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navbar(toggle) {
  var x = document.getElementById(toggle);
  if (toggle == "thisone") {
    var i = document.getElementById("thatone");
  } else {
    var i = document.getElementById("thisone");
  }

  x.style.transition = ".3s";
  if (x.style.opacity == 0) {
    if (i.style.opacity == 1) {
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

function check() {
  var x = document.getElementsByClassName("dropdown-content");
  for (let item of x) {
    item.style.opacity = 0;
    item.style.height = 0;
  }
}

function htmlSection_previous(toggle) {
  document.getElementById(toggle).style.display = "none";
  if (toggle === "html_intro") {
    document.getElementById("html_headings").style.display = "block";
  } else if (toggle === "html_basics") {
    document.getElementById("html_intro").style.display = "block";
  } else if (toggle === "html_attributes") {
    document.getElementById("html_basics").style.display = "block";
  } else {
    document.getElementById("html_attributes").style.display = "block";
  }
}

function cssSection_previous(toggle) {
  document.getElementById(toggle).style.display = "none";
  if (toggle === "css_intro") {
    document.getElementById("css_borders").style.display = "block";
  } else if (toggle === "css_syntax") {
    document.getElementById("css_intro").style.display = "block";
  } else if (toggle === "css_colors") {
    document.getElementById("css_syntax").style.display = "block";
  } else {
    document.getElementById("css_colors").style.display = "block";
  }
}
function htmlSection_next(toggle) {
  document.getElementById(toggle).style.display = "none";
  if (toggle === "html_intro") {
    document.getElementById("html_basics").style.display = "block";
  } else if (toggle === "html_basics") {
    document.getElementById("html_attributes").style.display = "block";
  } else if (toggle === "html_attributes") {
    document.getElementById("html_headings").style.display = "block";
  } else {
    document.getElementById("html_intro").style.display = "block";
  }
}
function cssSection_next(toggle) {
  document.getElementById(toggle).style.display = "none";
  if (toggle === "css_intro") {
    document.getElementById("css_syntax").style.display = "block";
  } else if (toggle === "css_syntax") {
    document.getElementById("css_colors").style.display = "block";
  } else if (toggle === "css_colors") {
    document.getElementById("css_borders").style.display = "block";
  } else {
    document.getElementById("css_intro").style.display = "block";
  }
}

function display_section(toggle) {
  var list = document.getElementsByClassName("bodys");
  for (let item of list) {
    item.style.display = "none";
  }
  document.getElementById(toggle).style.display = "block";
  check();
}

function display_nav(toggle) {
  const page = toggle.split("_");
  window.location.href = page[0] + "_course.html#";
  display_section(toggle);
}

function changeButtonColor() {
  var buttons = document.getElementsByClassName("quizButton");
  for (let button of buttons) {
    button.style.backgroundColor = "#38a7af";
    button.style.border = "2px solid #38a7af";
  }
}
function changeBackButtonColor(toggle) {
  var buttons = document.getElementsByClassName(toggle);
  for (let button of buttons) {
    button.style.backgroundColor = "#40c0c9";
    button.style.border = "2px solid #40c0c9";
  }
}
