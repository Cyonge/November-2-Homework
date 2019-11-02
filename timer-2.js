var startCountDown = document.querySelector('#startQuiz');
var secCountDown = document.querySelector('#seconds');
var startScreen = document.querySelector("#startScreen");
var questionsAll = document.querySelector("#questionsAll");
var currentAnswer;




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

// console.log(startScreen.classList);


startCountDown.addEventListener('click', startQuiz);

function firstQuestion() {
    var title = questions[currentQuestion].title; //Use this similarly for line 60 and loop through each choice and create a new document element and appending this to the divs that are already created
    document.querySelector("#title").innerText = title;
    startScreen.classList.add('hide');
    questionsAll.classList.remove('hide');

    

    //for loop to display the answer choices within each question in the object on the page
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {

        //this creates a button in the document
        var buttonEl = document.createElement("button");

        buttonEl.setAttribute("class", "currentAnswer");

        //display the button on the page with "text.Content"
        buttonEl.textContent = questions[currentQuestion].choices[i];

        //append button to the body
        buttonChoice.appendChild(buttonEl);
        currentAnswer = document.getElementsByClassName("currentAnswer");
        currentAnswer[i].addEventListener("click", questionClick);
        

        
    }
   
}





function startQuiz() {
    startTimer();
    firstQuestion();


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
    {
        title: "The lineup in The Usual Suspects was originally meant to be serious, but Benicio del Toro couldn’t stop _________ so they laughed throughout.",
        choices: ["Farting", "Crying", "Cracking Jokes", "Sleeping"],
        answer: "500%"
    },

    ///etc.
];


console.log(title);



//click and check if question is right or wrong
//then update time and display time
//currentQuestion++ (this increases question by 1) var currentQuestions = questions[currentQuestionIndex] - will need to declare this variable


//This is a function that says if the quiz taker choose the right answer then they move to the next question
//If they do not choose the right question then move to the next question and subtract 15 seconds
function questionClick(rightAnswer) {
    console.log("VALUE", rightAnswer.target.innerText);
    if (rightAnswer.value === questions[currentQuestion].answer) {
        currentQuestion++;
        
    }else{
        timeLeft -= 15;
        
    }

    firstQuestion();
    
};



// buttonChoice.addEventListener("click", questionClick());


// $("#currentAnswer").click(questionClick());

