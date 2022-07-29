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



//!Ошибки
try {
   console.log('Ok');
   console.log(a);
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
} finally {
   console.log('Finally');
}

console.log('end');

const data = [
   {
      id: 'box',
      tag: 'div'
   },
   {
      id: '',
      tag: 'nav'
   },
   {
      id: 'circle',
      tag: 'span'
   }
]



try {
   data.forEach((blockObj, idx) => {
      const block = document.createElement(blockObj.tag);
      if (!blockObj.id) throw new SyntaxError(`В данных под номером ${idx + 1} нет id`);

      block.setAttribute('id', blockObj.id);
      document.body.append(block);
   })
} catch (error) {
   if (error.name === 'SyntaxError') {
      console.error(error.name);
      console.error(error.message);
      console.log(error.stack);
   } else {
      throw error;
   }
}

//! Функции генераторы
//Выдаёт результат последовательно

function* generator() {
   yield 'm';
   yield 'i';
   yield 's';
}
const str = generator();
console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* secondGenerator(n) {
   for (let i = 0; i < n; i++) {
      yield i;
   }
}

const secondStr = secondGenerator(5);

console.log(secondStr.next().value);
console.log(secondStr.next().value);
console.log(secondStr.next().value);

for (let k of secondGenerator(3)) {
   console.log(k);
}

//!requestAnimationFrame
const btn = document.querySelector('.btn'),
   elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
   pos++;
   elem.style.top = pos + "px";
   elem.style.left = pos + 'px';

   if (pos < 300) {
      requestAnimationFrame(myAnimation);
   }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

//!Animate

const btnPhone = document.querySelector('#iphone'),
   btnMacbook = document.querySelector('#macbook'),
   images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
//    { transform: 'translateY(0)' },
//    { transform: 'translateY(100px)' },
//    { transform: 'translateY(-100px)' },
//    { transform: 'translateY(0)' }
// ], {
//    duration: 3000,
//    iterations: Infinity

// });

let phoneAnimation;

btnPhone.addEventListener('click', () => {
   if (!phoneAnimation) {
      phoneAnimation = images[0].animate([
         { transform: 'translateY(0)' },
         { transform: 'translateY(100px)' },
         { transform: 'translateY(-100px)' },
         { transform: 'translateY(0)' }
      ], {
         duration: 3000,
         iterations: Infinity

      });
   } else if (phoneAnimation.playState == 'paused') {
      phoneAnimation.play();
   } else {
      phoneAnimation.pause();
   }
})

//Micro and Macro tasks

setTimeout(() => console.log(1))

Promise.resolve()
   .then(() => console.log('mi'))

console.log('code1');

queueMicrotask(() => {
   console.log(2)
})

Promise.resolve()
   .then(() => console.log('mi2'))



console.log('code');