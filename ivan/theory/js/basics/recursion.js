"use strict";

//Рекурсия - это когда функция вызывает сама себя

//Возведение в степень
Math.pow(7, 2); //49

function pow(x, n) {
   let res = 1;
   for (let i = 0; i < n; i++) {
      res *= x;
   }
   return res;
}

//Рекурсивное возведение в степень
function recursionPow(x, n) {
   //База рекурсии
   if (n == 1) {
      return x;
   } else if (n > 1) {
      //Шаг рекурсии 
      return x * pow(x, n - 1);
   }
}

//База рекурсии - это случай, который приводит сразу к завершению функции, сразу возвращается вызываемое значение.
//Шаг рекурсии - запуск вложенной функции, но уже с другим значением
//Глубина рекурсии - общее количесвто вложенных вызовов вместе с самым первым (n)
//Максимальная глубина рекурсии варьируется от сложности действий и возможностей железа.Около 10К максимальная глубина

// Обычно эффективнее подход через цикл (связано с устройством языка и стеком вызовов)
// Однако внешнее второй подход выглядит проще (к немук склоняется большинство программистов)

let students = {
   js: [{
      name: 'John',
      progress: 100
   }, {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }]
   }
};

function getTotalProgressByIteration(data) {
   let total = 0;
   let students = 0;
   //Метод  Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. 
   for (let course of Object.values(data)) {
      //Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
      if (Array.isArray(course)) {
         students += course.length;
         for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
               total += subCourse[i].progress;
            }
         }
      }
   }

   return total / students;
}
console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
   if (Array.isArray(data)) {
      let total = 0;

      for (let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }

      return [total, data.length];
   } else {
      let total = [0, 0];

      for (let subData of Object.values(data)) {
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }

      return total;
   }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);
