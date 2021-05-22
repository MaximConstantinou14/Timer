let tens = 0;
let seconds = 0;
let minutes = 0;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let appendMinutes = document.getElementById('minutes');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let Interval;


start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
}

stop.onclick = function () {
    clearInterval(Interval);
}

reset.onclick = function() {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;

}

function startTimer () {
    tens++

    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++

        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes ++

        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        tens = 0;
        appendSeconds.innerHTML = '0' + 0;
    }

}