function getZero(num) {
   return num < 10 && num > 0 ? `0${num}` : num;
}

function timer(id, deadLine) {
   //!Timer

   setClock(deadLine, id);

   function getTimeRemaining(endTime) {
      const t = Date.parse(endTime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor(t / (1000 * 60 * 60) % 24),
         minutes = Math.floor(t / (1000 * 60) % 60),
         seconds = Math.floor(t / 1000 % 60);
      return {
         t,
         days,
         hours,
         minutes,
         seconds
      };
   }

   function setClock(endTime, selector) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateTime, 1000);
      updateTime();

      function updateTime() {
         const t = getTimeRemaining(endTime);
         days.textContent = getZero(t.days);
         hours.textContent = getZero(t.hours);
         minutes.textContent = getZero(t.minutes);
         seconds.textContent = getZero(t.seconds);

         if (t.t <= 0) {
            clearInterval(timeInterval);
            days.textContent = '0';
            hours.textContent = '0';
            minutes.textContent = '0';
            seconds.textContent = '0';
         }
      }
   }
}

export default timer;
export { getZero };