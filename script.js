const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "High Text Markup Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which programming language is known for its use in developing web applications?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
      "Creative Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question:
      "Which data structure uses the 'Last In, First Out' (LIFO) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the binary representation of the decimal number 25?",
    options: ["11001", "10010", "11100", "10101"],
    answer: "11001",
  },
  {
    question: "Who is considered the 'father of modern computer science'?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "Tim Berners-Lee",
      "Ada Lovelace",
    ],
    answer: "Alan Turing",
  },
  {
    question: "Which company developed the Python programming language?",
    options: ["Google", "Microsoft", "IBM", "Dropbox"],
    answer: "Google",
  },
  {
    question:
      "In object-oriented programming, what is the term for creating a new class by inheriting properties and methods from an existing class?",
    options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
    answer: "Inheritance",
  },
  {
    question: "Which protocol is used for sending emails over the Internet?",
    options: ["FTP", "SMTP", "HTTP", "TCP"],
    answer: "SMTP",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processor Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.className = "option";
      button.addEventListener("click", checkAnswer);
      optionsElement.appendChild(button);
    });
  } else {
    showResult();
  }
}

function checkAnswer(event) {
  const userAnswer = event.target.innerText;
  const correctAnswer = questions[currentQuestion].answer;
  if (userAnswer === correctAnswer) {
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

displayQuestion();
submitButton.addEventListener("click", checkAnswer);
