/*
! 1.Факториалом числа натурального числа n называется произведение чисел от 1 до n включительно. Факториалом нуля называют единицу. Написать программу нахождения факториала данного числа. Реализовать через рекурсию и без рекурсии. Вывести на экран факториалы от десяти первых чисел.
*/

function firstTask() {
   //Без рекурсии
   function calcFactorialSecond(number) {
      let resultFactorial = 1;

      while (number > 0) {
         resultFactorial *= number;
         number--;
      }
      return resultFactorial;
   }

   for (let i = 0; i < 6; i++) {
      console.log(`${i}! = ${calcFactorialSecond(i)}`);
   }

   //С рекурсией
   const factorial = n => {
      return (n === 0 ? 1 : n * factorial(n - 1));
   };

}
// firstTask();

/*
! 2.Написать программу нахождения факториала данного числа с проверкой на максимально возможное значение, которое может быть найдено. В случае переполнения памяти выдавать сообщение о невозможности нахождения факториала.
*/

function secondTask() {

   function calcFactorial(number) {
      if (number == 0) return 1;

      return number * calcFactorial(--number);
   }

   let num = 0;

   while (true) {
      let number = calcFactorial(num),
         nextNumber = calcFactorial(++num);

      if (number == nextNumber && number != 1 && nextNumber != 1) {
         console.log(`${num}! = невозможно найти фактроил из-за переполнения памяти`);
         break;
      }
      console.log(`${num}! = ${number}`);
   }

}
// secondTask();

/*
! 3.Число размещений без повторений Akn и число сочетаний без повторений Ckn могут быть найдены соответственно по формулам Akn=n!/(n−k)! и Ckn=n!/k!(n−k)!. Напишите программу для нахождения данных величин при известных n и k.
*/

function thirdTask() {
   function calcFactorial(number) {
      if (number == 0) return 1;
      return number * calcFactorial(--number);
   }

   let n = +prompt('Введите число n');
   let k = +prompt('Введите число k');

   let A = calcFactorial(n) / calcFactorial(n - k);
   let C = calcFactorial(n) / (calcFactorial(k) * calcFactorial(n - k));

   console.log('A = ' + A);
   console.log('C = ' + C);
}

// thirdTask();

/*
! 4.
!Задачи:
!  1.Создайте переменную, которая будет отображать имя пользователя. (Пользователь - user, имя - name). В неё поместите значение "John"
!  2.На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.
!  3.Измените значение второй переменной с 25 на 24 на следующей строке.
*/

let userName = "John";
let userNumber = 25;
userNumber = 24;

/*
! 5.
*/

let storeName = 'Пятёрка';

const storeDescription = {
   budget: 10000,
   employees: ['Андрей', 'Вася', 'Стёпа'],
   products: {
      'Милка': 130,
      'Чипсы': 110
   },
   open: true
};

/*
! 6.
*/

function firstTask() {
   for (let i = 5; i <= 10; i++) {
      console.log(i);
   }
}

function secondTask() {
   for (let i = 20; i >= 10; i--) {
      if (i == 13) break;
      console.log(i);
   }
}

function thirdTas() {
   for (let i = 2; i <= 10; i++) {
      if (i % 2 === 0) console.log(i);
   }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
   let num = 2;
   while (num != 17) {
      if (num % 2 !== 0) console.log(num);
      num++;
   }

}

// Место для пятой задачи

function fifthTask() {
   const arrayOfNumbers = [];

   for (let i = 0; i <= 5; i++) {
      arrayOfNumbers[i] = i + 5;
   }

   return arrayOfNumbers;
}

/*
! 7.
*/

function firstTask() {

   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
   }

   return result;
}

function secondTask() {

   const data = [5, 10, 'Shopping', 20, 'Homework'];

   for (let i = 0; i < data.length; i++) {
      if (typeof (data[i]) === 'number') data[i] *= 2;
      if (typeof (data[i]) === 'string') data[i] += ' - done';
   }

   return data;
}

function thirdTask() {

   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   for (let i = 1; i <= data.length; i++) {
      result[i - 1] = data[data.length - i];
   }
   return result;
}

/*
! 8.
*/

function sayHello(userName) {
   return `Привет, ${userName}!`;
}

function returnNeighboringNumbers(number) {
   return [number - 1, number, number + 1];
}

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

/*
! 9.
*/

function calculateVolumeAndArea(number) {
   if (typeof (number) === 'string' || number < 0 || !Number.isInteger(number)) return 'При вычислении произошла ошибка';

   const volume = number * number * number;
   const square = 6 * number * number;

   return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}


function getCoupeNumber(number) {
   if (typeof (number) === 'string' || !Number.isInteger(number) || number < 0)
      return 'Ошибка. Проверьте правильность введенного номера места';

   if (number === 0 || number > 36)
      return 'Таких мест в вагоне не существует';

   return Math.ceil(number / 4);
}

/*
! 10.
*/

function getTimeFromMinutes(number) {
   if (typeof (number) != 'number' || !Number.isInteger(number) || number < 0)
      return 'Ошибка, проверьте данные';

   let hour = Math.floor(number / 60);
   return (
      `Это ${hour} ${(hour > 1 && hour < 5) ? 'часа' :
         (hour === 1) ? 'час' :
            'часов'
      } и ${number % 60} минут`);
}


function findMaxNumber(...numbers) {
   if (numbers.length != 4 ||
      typeof (numbers[0]) != 'number' ||
      typeof (numbers[1]) != 'number' ||
      typeof (numbers[2]) != 'number' ||
      typeof (numbers[3]) != 'number')
      return 0;

   let num = numbers[0];
   for (let i = 1; i < 4; i++) {
      if (numbers[i] > num) num = numbers[i];
   }
   return num;
}

/*
! 11.
*/

const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   let { shops, height, moneyPer1m3, budget } = data;
   let square = 0;

   shops.forEach(item => {
      let { width, length } = item;
      square += (width * length);
   });

   let volume = square * height;
   let sum = volume * moneyPer1m3;

   if (sum < budget) {
      return 'Бюджета достаточно';
   } else {
      return 'Бюджета недостаточно';
   }
}

/*
! 12.
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
   let newArr = [],
      command = [];
   arr.sort();

   arr.forEach((item, idx) => {
      command.push(item);
      if ((idx + 1) % 3 === 0) {
         newArr.push(command);
         command = [];
      }
   });

   newArr.push(`Оставшиеся студенты: ${(command.length) ? command.join(', ') : '-'}`);
   return newArr;
}

/*
! 13.
*/
const restorantData = {
   menu: [
      {
         name: 'Salad Caesar',
         price: '14$'
      },
      {
         name: 'Pizza Diavola',
         price: '9$'
      },
      {
         name: 'Beefsteak',
         price: '17$'
      },
      {
         name: 'Napoleon',
         price: '7$'
      }
   ],
   waitors: [
      { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
   ],
   averageLunchPrice: '20$',
   openNow: true
};

function isOpen(prop) {
   let answer = '';
   prop ? answer = 'Открыто' : answer = 'Закрыто';

   return answer;
}

function isAverageLunchPriceTrue(fDish, sDish, average) {
   if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
      return 'Цена ниже средней';
   } else {
      return 'Цена выше средней';
   }
}

function transferWaitors(data) {
   const copy = Object.assign({}, data);

   copy.waitors = [{ name: 'Mike', age: 32 }];
   return copy;
}

/*
! 14.
Задание:
В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:
Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

        amountOfPages(5) => 5
        amountOfPages(25) => 17
        amountOfPages(1095) => 401   
        amountOfPages(185) => 97
*/

function amountOfPages(summary) {
   let count = 0, str = '';

   while (true) {
      if (summary <= str.length) return count;
      count++;
      str += count;
   }
}

/*
! 15.
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

Пример:
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false
*/

function isPangram(string) {
   let strSet = new Set(string.toLowerCase().replace(/\s/g, ''));

   return (strSet.size == 26) ? true : false;
}

/*
! 16.
Задание:
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сан + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

function deepCount(a) {
   let counter = 0;

   for (let i = 0; i < a.length; i++) {

      if (Array.isArray(a[i])) {
         return ++counter + deepCount(a[i]);
      }
      counter++;
   }
   return counter;
}

/* 
!16. ?
*/
function fib(amount) {
   if (typeof (amount) !== 'number' || amount <= 0 || !Number.isInteger(amount)) return "";

   let prevNumber = 0,
      nextNumber = 1;
   let res = "";

   while (true) {
      res += prevNumber;
      amount--;
      if (amount === 0) break;
      res += " ";

      let a = nextNumber;
      nextNumber += prevNumber;
      prevNumber = a;
   }
   return res;
}

/* 
!17. ?
*/

const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function (obj) {
      const { age } = obj;
      const { languages } = obj.skills;
      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function (lang) {
         str += `${lang.toUpperCase()} `;
      });

      return str;
   }
};

function showExperience(plan) {
   let { exp } = plan['skills'];
   return exp
}

function showProgrammingLangs(plan) {
   let str = "";

   for (let key in plan["skills"]["programmingLangs"]) {
      str += `Язык ${key} изучен на ${plan["skills"]["programmingLangs"][key]}\n`
   }
   return str;
}


/* 
!18. ?
*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   if (arr.length === 0) return 'Нет доступных валют';

   let str = 'Доступные валюты:\n';
   arr.forEach(item => {
      if (item !== missingCurr) str += `${item}\n`;
   })
   return str;
}

//console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

/* 
!19. ?
*/

const films = [
   {
      name: 'Titanic',
      rating: 9
   },
   {
      name: 'Die hard 5',
      rating: 5
   },
   {
      name: 'Matrix',
      rating: 8
   },
   {
      name: 'Some bad film',
      rating: 4
   }
];

function showGoodFilms(arr) {
   return arr.filter(film => film.rating >= 8);
}

// console.log(showGoodFilms(films));

function showListOfFilms(arr) {
   const newArr = arr.map(item => Object.entries(item)[0][1])
   return newArr.reduce((str, current) => `${str}, ${current}`);

}

// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
   return arr.map((item, idx) => {
      item['id'] = idx;
      return item;
   })
}

const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

function checkFilms(arr) {
   return arr.every(item => item.hasOwnProperty('id'));
}

console.log(checkFilms(films));

const funds = [
   { amount: -1400 },
   { amount: 2400 },
   { amount: -1000 },
   { amount: 500 },
   { amount: 10400 },
   { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
   return data.map(item => item.amount)
      .filter(num => num >= 0)
      .reduce((sum, current) => sum + current);
};

// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
   return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));

/* 
!20. ?
*/
//Композиция функций

//1
const myltiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);


const compose = (...arrFunctions) => (x) => {
   return arrFunctions.reduceRight((previousValue, currentValue) => currentValue(previousValue), x);
};
const discount = compose(normalizePrice, divide100, myltiply20)
console.log(discount(200));

//2

const add1 = (a) => a + 1;
const add113 = (a, b, c) => a + b + c;
const composeWithArgs = (...arrFunctions) => arrFunctions.reduceRight((previousValue, currentValue) => (...num) => currentValue(previousValue(...num)));
;


console.log(composeWithArgs(add1, add113)(1, 2, 3));

num()