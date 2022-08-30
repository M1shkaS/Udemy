// Не чистая функция т.к при одинаковых значения возвращает разный результат
const rndSum = a => Math.random() + a;

console.log(rndSum(4));
console.log(rndSum(4));
console.log(rndSum(4));

//Чистая функция
const sum = (a, b) => b + a;

console.log(sum(4, 5));
console.log(sum(4, 5));
console.log(sum(4, 5));

//Тоже не чистая
let num = 5;
const sumNum = a => num += a;
console.log(sumNum(4));
console.log(sumNum(4));
console.log(sumNum(4));