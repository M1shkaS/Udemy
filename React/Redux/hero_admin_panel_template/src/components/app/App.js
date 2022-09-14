import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

const App = () => {

   return (
      <main className="app">
         <div className="content">
            <HeroesList />
            <div className="content__interactive">
               <HeroesAddForm />
               <HeroesFilters />
            </div>
         </div>
      </main>
   )
}

export default App;

// store enhancers (готовых очень много)  - может расширять лубую часть store
// middleware - (готовых очень много) частный случай store enhancers 
// middleware - механизм, который работает как store enhancers и менят только работу функции dispatch

// configureStore - предназначена для того, чтобы удобно и автоматически комбинировать reducers, подключать доп функционал(middlewere и enhancers) и подключать devtools без страшной той строки
//createAction и createReducer используются крайне редко, есть createSlice которая их обьединяет
// В  createAction нельзя передаавать больше одного аргумента, данные автоматически подставятся в payload.Первым аргументом передавать только строки

// createEntityAdapter(мощная) - функция, которая возвращает обьект(адаптер) с готовыми методами, кобеками, мемо-ми селекторами и определённой структурой,
// большая часть методов это crud операции(create, update, delete, read)
// Нормализация данных - приведение всех данных к одному формату, к одной струтуре и избавляемся от дублей 

// rtk query - позволяет удобно манипулировать запросами на сервер и кешировать данные
