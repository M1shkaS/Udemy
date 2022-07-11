'use strict'

const persone = {
   name: 'Misha',
   surname: 'Selyavin',
   parents: {
      mom: 'Olga',
      dad: 'Vlad'
   }
}

//Можно делать глубокое копирование
const clone = JSON.parse(JSON.stringify(persone));

clone.parents['mom'] = 'Mi'
console.log(persone);
console.log(clone);

const inputRub = document.querySelector('#rub'),
   inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
   const request = new XMLHttpRequest();

   request.open('GET', 'js/current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();
   //status, statusText, response, readyState

   request.addEventListener('load', () => {
      if (request.status === 200) {
         console.log(request.response);
         const data = JSON.parse(request.response)
         console.log(inputRub.value);
         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
      } else {
         inputUSD.value = 'Что-то пошло не так';
      }
   })
})

