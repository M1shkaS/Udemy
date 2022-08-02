'use strict'

const persone = {
   name: 'Misha',
   surname: 'Selyavin',
   parents: {
      mom: 'Olga',
      dad: 'Vlad'
   }
}



clone.parents['mom'] = 'Mi'
console.log(persone);
console.log(clone);





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