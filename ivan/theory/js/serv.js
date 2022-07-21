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

//!Fetch

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

//!localStorage

localStorage.setItem('number', 10);
// localStorage.removeItem('number');
localStorage.clear();

console.log(localStorage.getItem('number'));

//!Регулярные выражения
i, g, m
new RegExp('pattern', 'flags')
const ans = prompt('Введите число');

// const req = /n/ig;
// console.log(req.test(ans));
// const req = /\d/g;
console.log(ans.match(req));


// \d - цифры
// \w - буквы
// \s - пробелы
// \D - Не цифры
// \W - Не буквы

console.log(ans.search(req));
console.log(ans.match(req));

const pass = prompt('Password');
console.log(pass.replace(/./g, '*'));
console.log(pass.replace(/\./g, '*'));//экранирование
console.log('12-50-64'.replace(/-/g, ':'));

//!Практика

const p1 = new Promise((resolve, reject) => {
   setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
   setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
   reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(value => {
   console.log(value);
}, reason => {
   console.log(reason) //'reject' - будет
});

const personeSecond = {
   name: 'Alex',
   age: 30,
   get userAge() {
      return this.age
   },
   set userAge(num) {
      this.age = num
   }
}

console.log(personeSecond.userAge = 31);
console.log(personeSecond.userAge);

!Инкапсуляция

function User(name, age) {
   this.name = name;
   this.age = age;

   this.say = function () {
      console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
   }
}
function User(name, age) {
   this.name = name;
   let userAge = age;

   this.say = function () {
      console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
   }

   this.getUserAge = function () {
      return userAge;
   }
   this.setUserAge = function (num) {
      userAge = num;
   }
}

const misha = new User('misha', 20)
console.log(misha.age);
misha.say();

misha.age = 30;
misha.say();
misha.setUserAge(30)
console.log(misha.getUserAge());

class User {
   constructor(name, age) {
      this.name = name;
      this._age = age;
   }

   say = () => {
      console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
   }

   get age() {
      return this._age;
   }
   set age(age) {
      if (typeof (age) == 'number' && age > 0 && age < 125) {
         this._age = age;
      } else {
         console.log('Введите корректное число...');
      }
   }
}
const misha = new User('misha', 20)
misha.say();
console.log(misha.age);
misha.age = 10000;
console.log(misha.age);

class User {
   constructor(name, age) {
      this.name = name;
      this._age = age;
   }
   #surname = 'Selyavin';
   say = () => {
      console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
   }

   get surname() {
      return this.#surname;
   }
   set surname(surname) {
      this.#surname = surname;
   }
}

const misha = new User('misha', 20);
misha.surname = 'Roga'
misha.say();
console.log(misha.surname);