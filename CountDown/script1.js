const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minutesE = document.getElementById('minutes');
const secondsE= document.getElementById('seconds');




const newYear = "1 Jan 2021";

function countDown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSec = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(toalSec /3600 /24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = (Math.floor(totalSec / 60)) % 60;
    const sec = Math.floor(totaSec) % 60;

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = formatTime(hours);
document.getElementById('minutes').innerHTML = formatTime(min);
document.getElementById('seconds').innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ?("0${time}" ):time;
}