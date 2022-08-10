// React позволяет делать более отпимизированные приложения, помогает их делать быстрее чем на обычно нативном js
//+ все работают по одному шаблону, а не придумывают свой велосипед
//React - это библиотека на основе js
//С его помощью можно создавать одностраничные приложения(spa)
//Можно хоть целый день сидеть в таких приложнениях и оно не сломается. Контрлирует использование памяти нашим веб приложением

//React основан на компонентах
//Компоненты независимы. Они не должны зависеть от другого кода и могут быть легко изменены и удалены
// Помогают избежать разных конфликтных ситуаций, например одинаковые имена. Его данные существуют в собственной области видимости
//Можно использовать повторно и подстраивать под разные задачи

//1.Использует препроцессор jsx(помись html и js)
//2.Внутри есть алгоритм, позволяющий отслеживать, какие части изменились и обновлять только их, а не всё приложение.Алгоритм сравнения
//3. Технология virtual DOM(это лёгкая копия в которой мы работаем, а затем переносим изменения на оснвоное DOM дерево)

//Декларативный(говорит, какой результат нам нужен) и императивный(как дойти до результата)
//React - декларативный

//Алгоритм реканселяции(согласования), сравнивает старые и новые dom дерева
//Если меняется корневая сущность, допустим с ul на div, то реакт думает,что внутри всё поменялось и уничтожает это  и в приложении будет создано заново этот компонент(элемент)
//А если меняются какие-то атрибуты т.е пропссы и тд, то будет уничтожен этот элемент. Допустим ul будет заменен на ul с другими атрибутами, но с теми же внутренностями
//Дальше алгоритм идёт рекурсивно и смотрит все дочерние элементы
//REACT СОХРАНЯЕТ КОПИЮ предыдущего
//дерева элементов и компонентов, но при этом сохраняет новое дерево, которое должно быть построено и дальше идёт сравнение элементов друг с другом
//,если реакт находит в них отличия, то изменённые элемекнты будет создавать мутацию(создавать перерисовку этого элемента в реальном DOM дереве)
//По атрибуту key реакт определяет поменлся ли элемент


//Когда мы внутреннее состояние одного компонента поднимаем выше по иерархии н-ся подьёмом состояния (state lifting)

// Экра́нное счи́тывающее устро́йство (также програ́мма экра́нного чте́ния/до́ступа, или скри́н-ри́дер) — это один из видов вспомогательных технологий (ВТ), предназначенных для слепых людей, имеющих плохое зрение, а также людей имеющих затруднения при обучении. Считывающее устройство — это специальное программное обеспечение, с помощью которого пользователь может постигать визуальную информацию без использования зрения, например, озвучивания, звуковых значков[чего?] или Брайлевского дисплея[1].
// Нужно всегда продумывать screen reader чтоб любые пользователи могли пользоваться сайтов