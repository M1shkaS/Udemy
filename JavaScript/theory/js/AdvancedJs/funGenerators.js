//! Функции генераторы
//Выдаёт результат последовательно

function* generator() {
   yield 'm';
   yield 'i';
   yield 's';
}
const str = generator();
console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* secondGenerator(n) {
   for (let i = 0; i < n; i++) {
      yield i;
   }
}

const secondStr = secondGenerator(5);

console.log(secondStr.next().value);
console.log(secondStr.next().value);
console.log(secondStr.next().value);

for (let k of secondGenerator(3)) {
   console.log(k);
}
