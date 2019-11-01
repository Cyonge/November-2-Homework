var startCountDown = document.querySelector('#startQuiz');
var secCountDown = document.querySelector('#seconds');
var startScreen = document.querySelector("#startScreen");
var questionsAll = document.querySelector("#questionsAll");
var choices = document.querySelector('#choices');
var currentQuestion = 0;

var timeLeft = 75;
var interval;
var running = false;

function displayTime(seconds) {
    var s = seconds;
    if (s < 10) {
        s = "0" + s
    }
    secCountDown.textContent = s;

}

function startTimer() {
    if (running) {
        return;
    }
    running = true;

    interval = setInterval(function () {
        timeLeft--
        displayTime(timeLeft);
        if (timeLeft <= 0) {
            secCountDown.textContent = "";
            clearInterval(interval)
            alert("Your time is up!")
        };
    }, 1000);
};

console.log(startScreen.classList);


startCountDown.addEventListener('click', startQuiz);

function nextQuestion() {
    var title = questions[currentQuestion].title; //Use this similarly for line 60 and loop through each choice and create a new document element and appending this to the divs that are already created
    document.querySelector("#title").innerText = title;
    currentQuestion++;
    startScreen.classList.add('hide');
    questionsAll.classList.remove('hide');

}

function startQuiz() {
    startTimer();
    nextQuestion();




    //select the startScreen, as a queryselector, once you select the element and .addclass or .removeclass you can add or remove classes
    //javascript add or remove css class
    //hide the startScreen
    //select the document element questionsAll
    //show the questionsAll screen, add class to the element and then remove that class from the element to show it
}


//The above code is for my timer and below I am going to be creating my 
//object filled with my questions

var questions = [
    {
        title: "What movie did Francis Ford Coppola direct?",
        choices: ["Rosemary's Baby", "The Omen", "The Godfather", "Goodfellas"],
        answer: "The Godfather"
    },
    {
        title: "After Top Gun was shown in Theaters recruitment in the Navy went up by:",
        choices: ["25%", "125%", "500%", "250%"],
        answer: "500%"
    },
    ///etc.
];

var mouseEventsEl = document.querySelector("#click-events");


//for loop to display the answer choices within each question in the object
for (var i = 0; i < questions[0].choices.length; i++) {

    //this creates a button in the document
    var buttonEl = document.createElement("button");

    //display the button on the page with "text.Content"
    buttonEl.textContent = questions[0].choices[i];
    
    //append button to the body
    choices.appendChild(buttonEl);
}