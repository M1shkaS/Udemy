'use strict';
//Символ — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов.
//Символы позволяют создавать скрытые (приватные) при обычном обращении свойства
// Приватность свойств помогает удостовериться в том, что свойство не будет случайно перезаписано
// Символы всегда уникальны (даже если у них одинаковое описание)

// id3 - описание символа
let id = Symbol('id3');
let id2 = Symbol('id2');

const obj = {
   'name': 'Test',
   [Symbol('id1')]: 1,
   [id]: 2,
   getId: function () {
      return this[id2];
   }
};

obj[id] = 1;
obj[id2] = 2;
console.log(obj);
console.log(obj[id]);
for (let keys in obj) {
   console.log(keys);
}

console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);