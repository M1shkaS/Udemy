window.addEventListener('DOMContentLoaded', () => {
   const btnsCalc = document.querySelectorAll('.calculater__btn'),
      calcInput = document.querySelector('.calculator__input');
   let result = null, firstNum, secondNum, reg = false;

   btnsCalc.forEach(btn => {
      btn.addEventListener('click', e => {
         const value = e.target.textContent.trim()
         if (typeof (+value) == 'number' && !isNaN(+value)) {
            if (!firstNum) firstNum = +value;
            if (!secondNum) secondNum = +value;
            calcInput.textContent = result
         } else if (['+', 'x', '-', '÷'].includes(value)) {
            console.log(2);
         } else if (value == '=') {
            console.log(3);
         } else {
            console.log(4);
         }
      })
   })

})