const timerElement = document.querySelector('.timer');

const formatTime = (time) => time.toString().padStart(2, '0');

const runTimer = (time) => {
    let timeLeft = time;

    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }

        let minutes = Math.floor(timeLeft % (60 * 60) / 60);
        let seconds = Math.floor(timeLeft % 60);
        let minOutput = formatTime(minutes);
        let secOutput = formatTime(seconds);

        timerElement.textContent = `${minOutput}:${secOutput}`;
        timeLeft--;
    }, 1000);
};

runTimer(10);
