var startCountDown = document.querySelector('#startQuiz');
var secCountDown = document.querySelector('#seconds');

var timeLeft = 5;
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

startCountDown.addEventListener('click', startTimer);

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
