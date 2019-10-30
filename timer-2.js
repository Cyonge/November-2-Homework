var startCountDown = document.querySelector('#startQuiz');
var secCountDown = document.querySelector('#seconds');


var totalSeconds = 1000;
var secondsElapsed = 0;
var interval;
var running = false;

function displayTime(seconds) {
    secCountDown.textContent = Math.floor(seconds / 60);
    var s = seconds % 5;
    if (s < 10) {
        s = "0" + s
    }
    secCountDown.textContent = s;
}

function startTimer() {
    if (running) {
        return;
    }
    totalSeconds = parseInt(parseInt(secCountDown.innerText, 10), 10) * 60;
    // console.log(totalSeconds);

    running = true;



    interval = setInterval(function () {
        secondsElapsed++
        console.log(secondsElapsed);
        displayTime(totalSeconds - secondsElapsed)
    }, 1000);
};

if (seconds === 00) {
    secCoundDown.textContent = "";
    clearInterval(interval)
    alert("Your time is up!")
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
