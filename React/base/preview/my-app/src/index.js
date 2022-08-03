//Отвечает за работу с реактом, jsx и внутренними особенностями
//В новых версиях react эту бибиблиотеку не нужно везде вставлять
import React from 'react';
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
   // <React.StrictMode>
   <App />,
   // </React.StrictMode>

   // elem,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//Самый главный файл
//Папка publick содержит статичные файлы, которые не будут меняться

//Компоненты - блоки пользовательского интерфейса, которые могут быть переиспользованы и могут путешествовать по другим файлам
//Они всегда должны быть с большой буквы
//Ещё это функции, которые могут возвращать jsx эллементы

//ctrl+shift+p - настройки