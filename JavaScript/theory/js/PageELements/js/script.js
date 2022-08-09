// console.log(document.body);
// console.log(document.head);
//Весь
// console.log(document.documentElement);
// Узлы, которые являются потомками body.Вместе с переносами и переносы
// console.log(document.body.childNodes);
// каждая сущность на странице - узел, но не каждый узел - элемент
// всё, что в тегах - элементы, а узлы зачастую тексты и переносы строк

//console.log(document.body.firstChild);// Первый ребёнок родителя     // firstElementChild - без узлов
// console.log(document.body.lastChild);// Последний ребёнок родителя   // lastElementChild - без узлов

// Команды, позволяющие получить родителей, соседей и детей
// console.log(document.querySelector("#current").parentNode);
//console.log(document.querySelector("#current").parentNode.parentNode); // parentElement

// data-атрибуты в вёрстке
// console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").previousSibling);
// console.log(document.querySelector("[data-current='3']").nextElementSibling); // Аналоги для пропуска нодов
// console.log(document.querySelector("[data-current='3']").previousElementSibling); // (переходов на новую строку и пр.)

// for (let node of document.body.childNodes) {
//    if (node.nodeName == '#text') {
//        continue;
//    }
//    console.log(node);
// }