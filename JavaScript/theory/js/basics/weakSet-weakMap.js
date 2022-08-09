'use strict';

// Аналогичны обычным Set и Map

let user = { name: 'Ivan' };
user = null;
console.log(user); // Объект удалён из памяти

let secondUser = { name: 'Ivan' };
const arr = [secondUser];
secondUser = null;
console.log(secondUser);
console.log(arr[0]); //  сохраняет ссылку на объект


let userThird = { name: 'Ivan' };
let map = new Map();
map.set(userThird, 'data');
userThird = null;
console.log(map.keys());

// У weakMap к качестве ключей могут быть использованы только объекты, а значения могут быть произвольных типов.
// Если ссылка на объект существует только внутри Map, то этот объект будет удалён

// WeakMap (ключами могут быть только обьекты и если на нх удаляется ссылка, то и тут они тоже удалятся)
// add delete has get

let userF = { name: 'Ivan' };

let wMap = new WeakMap();
wMap.set(userF, 'data');
userF = null;

console.log(wMap.has(userF));
// интерпретатор не может определить, что находится внутри структуры данных (ограничение WeakMap)
console.log(wMap);
// // из-за этого у WeakMap доступны только методы get, set, delete и has

//Коллекция WeakSet аналогична обычному Set, но мы можем добавлять в него ТОЛЬКО объекты
// Объект доступен в коллекции до тех пор, пока он достижим
// Для WeakSet доступны методы add, has и delete
// Не является перебираемым

let messageUser = [
   { text: ' Hello', user: 'Ilya' },
   { text: ' Как дела?', user: 'Миша' },
   { text: ' Магазин', user: 'Dima' }
];

let readMessages = new WeakSet();

readMessages.add(messageUser[0]);

messageUser.shift();

console.log(readMessages.has(messageUser[0]));





