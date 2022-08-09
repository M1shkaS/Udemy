//ИЛИ ззапинается на правде, а И запинается на лжи, иначе оба доходят до конца и выводят его 
console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); // Nan
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //true
//?? nulish оператор, не выводит только null, undefine, а 0 может вывести
// приоритет выполнения тот же, что у ||
// ?? нельзя использовать с &&
console.log(0 ?? 3); // 0
console.log(null ?? 3); // 3
// 0, '', null, undefined, NaN - всегда превращаются в false

//[] + ... будет срока
console.log([] + 'mimi');

//Оператор опциональной цепочки
const obj = {
   name: 'misha'
}
// если obj не равен undefined или null, то идёт операция,если равен, то просто возвращает undefined вместо операции
console.log(obj?.name);
console.log(obj?.age);


let n;
const fr = NaN;
const zer = 0;
const tw = 2;

if (n || zer || fr === 3 || tw) {
   console.log('done')//done
}

// Rest-оператор противоположен spread (spread раскладывал сущность на отдельные элементы)
// Он позволяет складывать отдельные элементы в один массив
const log = function (a, b, ...rest) {
   console.log(a, b, rest);
}
log(4, 'mi', 1, 2, 3, 4, 5, 'lol')
log('basic', 'rest', 'operator', 'usage');

// Параметры по умолчанию

function calcOrDouble(number, basis = 2) {
   // basis = basis || 2; // раньше делали так
   console.log(number * basis);
}

calcOrDouble(3);


