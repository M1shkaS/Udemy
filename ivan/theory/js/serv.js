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