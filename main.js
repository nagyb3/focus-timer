const startMinutes = 25;
let time = startMinutes * 60;

const countDownElement = document.querySelector('.countdown');
const startStopButton = document.querySelector('.start-stop');
const ResetButton = document.querySelector('.reset');


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + String(seconds) : seconds

    countDownElement.textContent = `${minutes}:${seconds}`;
    time--;
}

let currentlyRunning = false;
let interval;

startStopButton.addEventListener('click', () => {
    if (currentlyRunning) {
        clearInterval(interval);
        // console.log(interval)
        startStopButton.textContent = "START";
        currentlyRunning = false;
    } else {
        interval = setInterval(updateCountdown, 1000);
        startStopButton.textContent = "STOP";
        currentlyRunning = true;
    }
});

// let interval = setInterval(updateCountdown, 1000);