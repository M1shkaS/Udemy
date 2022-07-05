console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // Nan
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //true

//----------------------------------------------------------------------------------------

let n;
const fr = NaN;
const zer = 0;
const tw = 2;

if (n || zer || fr === 3 || tw) {
   console.log('done')
}

for (let i = 5; i <= 10; i++) {
   console.log(i)
}

for (let i = 20; i >= 10; i--) {
   if (i == 13) break;
   console.log(i);
}

for (let i = 2; i <= 10; i++) {
   if (i % 2 === 0) console.log(i);
}

for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}

let num = 2;
while (num != 17) {
   if (num % 2 !== 0) console.log(num);
   num++
}

//----------------------------------------------------------------------------------------

const dataInf = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
   if (typeof (dataInf[i]) === 'number') dataInf[i] *= 2;
   if (typeof (dataInf[i]) === 'string') dataInf[i] += ' - done';
}
console.log(dataInf);

const resul = [];
for (let i = 1; i <= data.length; i++) {
   resul[i - 1] = data[data.length - i];
}
console.log(resul);

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
   result += '\n'
}
console.log(result);

//----------------------------------------------------------------------------------------

function getMathResult(baseNumber, amount) {
   if (typeof (amount) === 'string' || amount <= 0) return baseNumber;

   let result = `${baseNumber}`;
   let num = baseNumber;

   for (let i = 1; i < amount; i++) {
      baseNumber = num * (i + 1);
      result += `---${baseNumber}`;
   }

   return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(5, 1));
console.log(getMathResult(5, 0));
console.log(getMathResult(5, 'str'));

function sayHello(userName) {
   return `Привет, ${userName}!`;
}
console.log(sayHello('Alex'));;

//----------------------------------------------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length === 0) return 'Семья пуста';

   let str = 'Семья состоит из: ';
   arr.forEach(item => {
      str += `${item} `;
   });

   return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   let str = '';
   if (arr.length === 0) console.log(str);;

   arr.forEach(item => {
      str += `${item.toLowerCase()}\n`
   })

   console.log(str);
}


const someString = 'This is some strange string';
//Переворачивание строки
function reverse(str) {
   if (typeof (str) !== 'string') return 'Ошибка';

   let arr = str.split('');
   arr.reverse();

   return arr.join('');

}
console.log(reverse(someString));

//----------------------------------------------------------------------------------------

let numb = 6;
function calc() {
   numb = 7;
}

calc()
console.log(numb);

//----------------------------------------------------------------------------------------

const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

Object.defineProperty(user, 'surname', { writable: false })
// console.log(Object.getOwnPropertyDescriptor(user, 'surname'));
user.surname = 'selyavin'; // не перезапишет из-за writable
// console.log(user);

Object.defineProperty(user, 'gender', { value: 'M' }) //создаёт новое свойство сразу с флагами false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

Object.defineProperties(user, {
   name: { writable: false },
   surname: { enumerable: false }
})

const id = Symbol('id');
user[id] = 1;

for (let key in user) {
   console.log(user[key]);
}

console.log(user);
console.log(user[id]);

Map

const shops = [
   { bread: 38 },
   { beer: 100 },
   { cake: 250 }
];

const budget = [5000, 6000, 7000];

const map = new Map(); // помогает делать ключ обьектом

shops.forEach((item, idx) => {
   map.set(item, budget[idx]);
})

console.log(map);
console.log(map.get(shops[0])); //выдаст значение
console.log(map.has(shops[0])); //Есть ли
console.log(map.delete(shops[0])); //Удаляет
console.log(map.clear()); //Удаляет всё
console.log(map.size); //Размер
console.log(map);

const mapSecond = new Map([
   [{ apple: 15 }, 50]
]);

for (const key of map.keys()) {
   console.log(key);
}
for (const val of map.values()) {
   console.log(val);
}
for (const item of map.entries()) {
   console.log(item);
}
//forEach тоже работает
console.log(mapSecond);

Set

const arr = ['Alex', 'Ann', 'Oleg', 'Ann'];

const set = new Set(arr);
set.add('Oleg');
set.add('Ivan');
set.clear();
set.size;
set.delete('Ivan');
console.log(set.has('Ivan'));
console.log(set);

for (const value of set) {
   console.log(value);
}

set.forEach((value, valueAgain, set) => {
   console.log(value, valueAgain);
})

console.log(set.values());

function unique(array) {
   return Array.from(new Set(array));
}

console.log(unique(arr));

//----------------------------------------------------------------------------------------



