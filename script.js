let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(time, 1000);
function time() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Add leading zero if single digit
    hours = (hours < 10 ? '0' + hours : hours);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

    // Display hours in 12-hour format
    if (hours > 12) {
        hours -= 12;
    }

    // Update HTML elements
    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}