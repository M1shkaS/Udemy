const initialValue = { value: 2 };
// Функция reduce должна быть чистой функцией, должна зависеть только от state и action при этом должнать выдавать один и тот же результат при одинаковых аргументах и не иметь никаких побоычных эффектов
// В reducer не должно быть никаких случайных чисел, никакой работы с DOM деревом, запросов на сервер и консольлогов
// Должна соблюдать принципы иммутабельности 
const reducer = (state = initialValue, action) => {
   const { type, payload } = action;
   // Негласное правильно, что тут мы всё пишем в верхнем регистре
   switch (type) {
      case 'INC':
         return {
            ...state,
            value: state.value + 1
         };
      case 'DEC':
         return {
            ...state,
            value: state.value - 1
         };
      case 'RND':
         return {
            ...state,
            value: state.value * payload
         };
      default:
         return state;
   }
}

export default reducer;