//Отвечает за работу с реактом, jsx и внутренними особенностями
//В новых версиях react эту бибиблиотеку не нужно везде вставлять
import React, { StrictMode } from 'react';
//Позволяет с DOM СТРУКТУРОЙ НА СТРАНИЦЕ
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
//Измеряет как быстро работает наше приложение, можно удалить
// import reportWebVitals from './reportWebVitals';


const text = 'Hello world'

//Реакт элемент т.е элемент интерфейса, частичка компонента
//Элементы не могут меняться
// const elem = <h2>Hello world</h2>;

//Всегда должен быть один корневой блок
const elem = (
   //всегда должен быть один корневой элемент
   <div>
      {/* Вместо class тут className, также и с for на htmlFor */}
      <h2 className='text'>Текст: {text}</h2>
      <div>{2 + 2}</div>
      {/* Нельзя вставлять только обьекты  */}
      {/* <div>{new Date()}</div> */}
      <input type="text" />
      <button tabIndex='0'>Click me</button>
      {/* Если нужна кнопка без контента, то просто </button> */}
   </div>
);

//Тоже самое,ток без jsx
//arg1 - сам элемент,arg2 - название класса(если нет, то просто null), arg3 - содержимое
// const elem = React.createElement('h2', null, 'Hello world');
// const elem = React.createElement('h2', { className: 'className' }, 'Hello world');
//Создастся обьект
// const element = {
//    type: 'h2',
//    props: {
//       className: 'className',
//       children: 'Hello world'
//    }
// }
//ReactDOM. создаёт корневой узел при помощи createRoot
//root во что мы помещаем
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //Что мы будем рендерить
   //Инструмент обнаружения потенциальных проблем в приложении.Делает доп проверки для своих потомков
   //Обнаруживает устаревшие и небезопасные конструкции и сообщает о некоторых побочных эффектах 
   //Можно использовать, когда находим готовый код и он нам скажет, что он старый и нужно удалить
   //Помогает переходить на новую версию реакта
   //Только в режиме разработки
   <StrictMode>
      <App />
   </StrictMode>

   // elem,
);


// reportWebVitals();

//Самый главный файл
//Папка publick содержит статичные файлы, которые не будут меняться

//Компоненты - блоки пользовательского интерфейса, которые могут быть переиспользованы и могут путешествовать по другим файлам
//Они всегда должны быть с большой буквы
//Ещё это функции, которые могут возвращать jsx эллементы

//ctrl+shift+p - настройки