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
    const hoursDegrees = ((hours /60 * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClockFace,1000);