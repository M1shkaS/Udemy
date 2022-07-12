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

//Promise

console.log('Данные..');

const req = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('Подготовка данных');

      const obj = {
         name: 'Misha',
         age: 20,
         isMarried: false
      }

      resolve(obj)
   }, 2000)
});

req.then((obj) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('Всё ещё подготовка');
         // resolve(obj);
         reject()
      }, 2000)
   })
})
   .then(obj => {
      console.log('Ещё немного');
      obj.age = 45;
      return obj;
   })
   .then(obj => {
      console.log(obj);
   }).catch(() => {
      console.error('Всё плохо');
   }).finally(() => {
      console.log('Ура. Конец');
   });

const prom = (timeout) => {
   return new Promise((resolve) => {
      setTimeout(() => { resolve() }, timeout)
   })
}

prom(1000).then(() => { console.log(1000); });
prom(2000).then(() => { console.log(2000); });

Promise.all([prom(1000), prom(2000)]).then(() => {
   console.log('all');
})
Promise.race([prom(1000), prom(2000)]).then(() => {
   console.log('race');
})

//Fetch

fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify({ name: 'Misha' }),
   headers: { 'Content-type': 'application/json' }
})
   .then(response => response.json())
   .then(json => console.log(json));

//filter
const names = ['Ivan', 'Alex', 'Misha', 'Petrushka', 'Ann'];

const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames);

//map
let answers = ['miaDASDA', 'Mdsdads', 'dsaSA'];
const lowerAnswers = answers.map(item => item.toLowerCase());
answers = answers.map(item => item.toLowerCase());

console.log(lowerAnswers);
console.log(answers);

//every/some
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.some(num => num > 5));
console.log(numbers.every(num => num > 1));

//reduce

const arrNumbers = [1, 2, 6, 4, 90, 56];
const resultNum = arrNumbers.reduce((sum, current) => sum + current, 3);
console.log(resultNum);

const arrFruits = ['apple', 'milk', 'beer'];
const resultFrit = arrFruits.reduce((sum, current) => sum + ', ' + current);
console.log(resultFrit);


