const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds /60 * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes /60 * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hour = now.getHours();
    const hoursDegrees = ((hours /12 * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    var time = padTwo(hours) + ":" + padTwo(minutes) + ":" + padTwo(seconds);
    const digitalClockface = document.querySelector('.time');
    digitalClockface.innerHTML = time;

}

function padTwo(number){
    return (number < 10 ? '0':'') + number;
}

setInterval(setClockFace,1000);