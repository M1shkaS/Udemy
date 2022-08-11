const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {

   const now = new Date();

   const seconds = now.getSeconds();
   const secondDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondDegrees}deg)`;

   const min = now.getMinutes();
   const minDegrees = ((min / 60) * 360) + 90;
   minHand.style.transform = `rotate(${minDegrees}deg)`;

   const hour = now.getHours();
   const hourDegrees = ((hour / 60) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setClock, 1000);