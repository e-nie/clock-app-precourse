let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function() {
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours
    const minutes = now.getMinutes();
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
