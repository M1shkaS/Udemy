// 'use strict'(работаем в современном режиме) делает так, что прежние warningi становились ошибками, допустим инициализация переменной без её обьявления
'use strict'



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
   //Когдай дойдёт до этой команды, она начнёт сканировать функцию, не найдёт такой переменнлй и пойдёт на уровень выше и найдёт
   numb = 7;
}

calc()
console.log(numb);

let a = 5
//Тут внутри создаётся своя переменная функциональная
function second() {
   let a = 7;
}
second()
console.log(a);

//----------------------------------------------------------------------------------------

const buttons = document.querySelectorAll('button'),
   wrapper = document.querySelector('.btn-block');

buttons[0].classList.add('red', 'mimm')
buttons[0].classList.remove('red')
buttons[0].classList.toggle('red')
console.log(buttons[0].classList.item(1));
console.log(buttons[0].classList.contains('red'));

//Делегирование событий
wrapper.addEventListener('click', (event) => {
   if (event.target && event.target.tagName == 'BUTTON') {
      console.log('Hello');
   }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn)

const timerId = setTimeout(logger, 1000);
clearTimeout(timerId)

//Нулевую задержку нельзя, всё равно буде 4мл.
//setInterval не делает паузы, если callback большой, а setTimeout делает
const intId = setInterval(logger, 1000);
clearInterval(intId)


function logger() {
   console.log('Hello');
}

//----------------------------------------------------------------------------------------




