window.addEventListener('DOMContentLoaded', () => {
   const btnsCalc = document.querySelectorAll('.calculater__btn'),
      calcInput = document.querySelector('.calculator__input');
   let result = null, firstNum = '', secondNum = '', reg = false, operand = '';

   btnsCalc.forEach(btn => {
      btn.addEventListener('click', e => {
         const value = e.target.textContent.trim()
         console.log(value);
         // if (typeof (+value) == 'number' && !isNaN(+value) || value == '.') {
         //    if (!reg) {
         //       firstNum += +value;
         //    } else {
         //       secondNum += +value;
         //    }

         //    calcInput.textContent = firstNum + operand + secondNum;

         // } else if (['+', 'x', '-', '÷'].includes(value)) {
         //    switch (value) {
         //       case '+':
         //          operand = ' + ';
         //          break;
         //       case '-':
         //          operand = ' - ';
         //          break;
         //       case 'x':
         //          operand = ' * ';
         //          break;
         //       case '÷':
         //          operand = ' / ';
         //          break;
         //    }
         //    reg = true
         //    calcInput.textContent = firstNum + operand + secondNum;
         // } else if (value == '=') {
         //    switch (operand.trim()) {
         //       case '+':
         //          calcInput.textContent = +firstNum + +secondNum;
         //          break;
         //       case '-':
         //          calcInput.textContent = +firstNum - +secondNum;
         //          break;
         //       case '*':
         //          calcInput.textContent = +firstNum * +secondNum;
         //          break;
         //       case '/':
         //          calcInput.textContent = +firstNum / +secondNum;
         //          break;
         //    }
         // } else {
         //    result = null, firstNum = '', secondNum = '', reg = false, operand = '';
         //    calcInput.textContent = ''
         // }
      })
   })

})

