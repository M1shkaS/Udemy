'use strict';

// Преимущество в том, что синхронные операции можно использовать по цепочке

// console.log('Request Data');

// const req = new Promise(function(resolve, reject){ // arg1 - правильное выполнение, arg2 - неправильное выполнение
//     setTimeout(() => {
//         console.log('Data preparing');

//         const product = {
//             name: 'TV',
//             price: 15
//         };

//         resolve(product); // запускается только при положительном исходе
//     }, 2000);
// }); 

// req.then((product) => { // метод, который выполняется на промисе в случае положительного исхода (arg передаётся в resolve)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             product.status = 'Ordered';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('An error occured');
// }).finally(() => { // выполняется независимо от исхода
//     console.log('Finally');
// });

const test = time => {
   return new Promise((resolve) => { // можем передавать и только resolve
      setTimeout(() => resolve(), time);
   });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Принимает массив с промисами и позволяет убедиться в том, что все промисы выполнились.Ещё принимает в себя якобы rejectБ tckb xnj-nj yt nfr ,eltn
Promise.all([test(1000), test(2000)]).then(() => {
   console.log('All');
});
// Аналогичен, но дожидается выполнения лишь одного промиса(тот, который быстрее)
Promise.race([test(1000), test(2000)]).then(() => {
   console.log('Someone');
});


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
