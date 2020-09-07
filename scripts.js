const timerElement = document.querySelector('.timer');

const formatTime = (time) => time.toString().padStart(2, '0');

const Color = {
    BASIC_BLUE: 'var(--basic-blue)',
    BASIC_GOLD: 'var(--basic-gold)',
    LIGHT_GOLD: 'var(--light-gold)'
};

const runTimer = ({time, timeColorOne, timeColorTwo}) => {
    let timeLeft = time;
    let color = Color.LIGHT_GOLD;

    timerElement.style.color = color;

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

        if (timeLeft > timeColorOne) {
            return;
        }

        if (timeLeft < timeColorTwo) {
            color = Color.BASIC_BLUE;
        } else if (timeLeft < timeColorOne) {
            color = Color.BASIC_GOLD;
        }

        timerElement.style.color = color;
    }, 1000);
};

const config = {
    time: 100,
    timeColorOne: 60,
    timeColorTwo: 30
};

runTimer(config);
