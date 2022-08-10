window.addEventListener('DOMContentLoaded', () => {
   const btnsCalc = document.querySelectorAll('.calculater__btn'),
      calcInput = document.querySelector('.calculator__input');

   calculator(btnsCalc, calcInput);

   function calculator(selectorBtns, selectorInput) {
      selectorBtns.forEach(btn => {
         btn.addEventListener('click', e => {
            const btnValue = e.target.textContent.trim()

            //Ставим пробелы между операторами и мини проверка на точки
            selectorInput.textContent += btnValue.replace(/[\+\-x÷]/g, ' ' + btnValue + ' ');
            selectorInput.textContent = selectorInput.textContent.replace(/\.\./g, '.');

            //Находим все операторы и операнды
            const strArr = selectorInput.textContent.match(/[\+\-x÷]/g);
            const numArr = selectorInput.textContent.match(/-?\d+(\.\d+)?/g);


            switch (btnValue) {
               case 'C':
                  selectorInput.textContent = '';
                  strArr.length = 0;
                  numArr.length = 0;
                  break;
               case '=':
                  calcResult(numArr, strArr, selectorInput);
            }
         })
      })
   }

   function returnInitialValueForReduce(operator, number) {
      if (operator == '+') {
         return 0;
      } else if (operator == '-') {
         return +number * 2;
      } else if (operator == '÷') {
         return +number * +number;
      } else {
         return 1;
      }
   }

   function returnValueCounter(counter) {
      return (counter == 0 ? 1 : (counter == 1) ? 1 : 0);
   }

   function calcResult(numbersArray, operatorsArray, outputString) {
      const initialValue = returnInitialValueForReduce(operatorsArray[0], numbersArray[0]);

      let counter = 0;
      if (numbersArray.length - operatorsArray.length - 1 == 0) {

         const res = numbersArray.reduce(
            function (previousValue, currentValue, idx) {
               if (operatorsArray[idx - counter] == '+') {
                  counter = returnValueCounter(counter);
                  return previousValue + +currentValue;
               } else if (operatorsArray[idx - counter] == '-') {
                  counter = returnValueCounter(counter);
                  return previousValue - +currentValue;
               } else if (operatorsArray[idx - counter] == 'x') {
                  counter = returnValueCounter(counter);
                  return previousValue * +currentValue;
               } else if (operatorsArray[idx - counter] == '÷') {
                  counter = returnValueCounter(counter);
                  return previousValue / +currentValue;
               }

            }, initialValue
         );

         outputString.textContent = res;
      }
      outputString.textContent = outputString.textContent.replace(/\=/g, '');
   }
})

