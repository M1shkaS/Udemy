'use strict';

// Map - специфическая структура данных, похожая на объект, но вместо свойств у неё может использоваться и объект и массив и функция, и т.д.
// Map является объектом
// Карты поддерживают чёткий порядок своих элементов(как  положили, так и будет перебираться)
// Карта есть массив массивов
//forEach тоже работает

const user = {
   4: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};
console.log(user);

// 4 записана в обьекте не числом, а строкой
console.log(typeof (Object.keys(user)[0]));

const shops = [
   { rice: 500 },
   { oil: 200 },
   { bread: 50 }
];

const map = new Map();

// arg1 - ключ, arg2 - значение
map.set(shops[0], 5000);
map.set(shops[1], 50);
map.set(shops[2], 500);

//Получает значение
console.log(map.get(shops[0]));
// существует ли объект внутри карты
console.log(map.has(shops[0]));
// map.delete(key);
// map.clear(key); // полностью очищает карту
// console.log(map.size); // кол-во объектов

// можно задавать карту при её объявлении
const map1 = new Map([
   [{ paper: 400 }, 8000]
]);
console.log(map1);

// Перебор элементов карты:
console.log('\nПервый способ перебора (получаем ключи)');
// Возвращает итерируемый объект по ключам
for (let shop of map.keys()) {
   console.log(shop);
}

console.log('\nВторой способ перебора (получаем значения)');
for (let price of map.values()) {
   console.log(price);
}

console.log('\nТретий способ перебора (получаем свойства и значения)');
for (let price of map.entries()) {
   console.log(price);
}

console.log('\nЧасто с методом entries() используется деструктуризация');
for (let [shop, price] of map.entries()) {
   console.log(price, shop);
}


//Set - каждое значение будет только один раз
// В отличие от массивов у Set отсутствуют ключи при значениях

const arr = ['Alex', 'Ann', 'Oleg', 'Ann'];

const set = new Set(arr);
//Добавляет
set.add('Oleg');
set.add('Ivan');
// Полностью очищает
set.clear();
//Размер
set.size;
//Удаляет
set.delete('Ivan');
//Проверяет наличие
console.log(set.has('Ivan'));
console.log(set);

// существует для совместимости
console.log(set.values());
console.log(set.keys());
console.log(set.entries());

// Array.from() для преобразования Set в массив

function unique(arr) { // удаляем из массива повторяющиеся значения
   return Array.from(new Set(arr));
}
console.log(unique(arr1));
//forEach тоже работает