const timeElem = document.getElementById('time');
const startBtnElem = document.getElementById('start');
const stopBtnElem = document.getElementById('stop');
const resetBtnElem = document.getElementById('reset');

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2 , "0")} : ${seconds.toString().padStart(2 , "0")}`;
    
    timeElem.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up..!!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startBtnElem.addEventListener("click", startTimer);
stopBtnElem.addEventListener("click", stopTimer);
resetBtnElem.addEventListener("click", resetTimer);