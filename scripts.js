const timerElement = document.querySelector('.timer');

const runTimer = (time) => {
    let timeLeft = time;

    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }

        timerElement.textContent = timeLeft;
        timeLeft--;
    }, 1000);
};

runTimer(10);
