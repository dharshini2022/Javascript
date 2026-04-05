const questionSet = [
    {
      "Question": "What does HTML stand for?",
      "options": [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Leveler"
      ],
      "Answer": "Hyper Text Markup Language"
    },
    {
      "Question": "Which language is used for styling web pages?",
      "options": [
        "HTML",
        "JQuery",
        "CSS",
        "XML"
      ],
      "Answer": "CSS"
    },
    {
      "Question": "Which of the following is NOT a JavaScript data type?",
      "options": [
        "String",
        "Boolean",
        "Float",
        "Undefined"
      ],
      "Answer": "Float"
    },
    {
      "Question": "What does DOM stand for?",
      "options": [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
        "Desktop Object Model"
      ],
      "Answer": "Document Object Model"
    },
    {
      "Question": "Which method is used to select an element by ID in JavaScript?",
      "options": [
        "getElementByClass()",
        "querySelectorAll()",
        "getElementById()",
        "getElementsByTagName()"
      ],
      "Answer": "getElementById()"
    }
]

const questionDiv = document.querySelector(".questionDiv");
const optionDiv = document.querySelector(".optionDiv");
const correctAns = document.querySelector("#correctAns");
const score = document.querySelector("#score");
const nextBtn = document.querySelector(".nextBtn");
const section = document.querySelector("section");
let currentScore = 0;
let current = 0;

function loadQuestion(){
  optionDiv.innerHTML = "";
  correctAns.innerHTML = "";
  section.style.backgroundColor = "white";

  const obj = questionSet[current];
  questionDiv.innerHTML = obj.Question;

  obj.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAns(option));
    optionDiv.appendChild(button);
  });

}

function checkAns(option){
  if(option == questionSet[current].Answer){
    section.style.backgroundColor = "green";
    currentScore++;
  }else{
    section.style.backgroundColor = "red";
  }
  score.innerHTML ="Your Score:" + currentScore;
  correctAns.innerHTML = "Correct Answer:" + questionSet[current].Answer;

  document.querySelectorAll(".optionDiv button").forEach(btn => {
    btn.disabled = true;
  });
}

nextBtn.addEventListener("click", () =>{
  current++;
  if(current < questionSet.length){
    loadQuestion();
  }else{
    showResult();
  }
});

function showResult(){
  questionDiv.innerHTML = "End of Score";
  optionDiv.innerHTML = "";
  correctAns.innerHTML = "";
  score.innerHTML = `Final Score: ${currentScore} / ${questionSet.length}`;
}

loadQuestion();
