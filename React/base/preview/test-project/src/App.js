
import './App.css';

//Функциональный компонент т.к обьявлен черезщ функцию
//props - это обьект с вещами, которые мы туда передадим
//Даже, если мы его сюда не передадим он будет существовать
//В качестве пропсов можно передавать всё что угодно
function WhoAmI({ name, surname, link }) {
   return (
      // Внутренности важнее оболочки
      <div>
         <h1>My name is {name()} , surname - {surname} </h1>
         <a target='_blank' href={link}>My profile</a>
      </div>
   )
}

function App() {
   return (
      <div className="App">
         {/* Значение этих атрибутов, котороые мы передаём
          они не изменяемые, они ток на чтение.
          Поменять не сможем, а если хотим поменять значение, то нужно полность перерисовывать*/}

         {/* <WhoAmI name='Misha' surname='Selyavin' link='https://vk.com/im' />
         <WhoAmI name='Ilya' surname='Roga' link='https://vk.com/im' /> */}

         {/* <WhoAmI name={{ firstName: 'Andrei' }} surname='Roga' link='https://vk.com/im' /> */}

         <WhoAmI name={() => 'Mi'} surname='Roga' link='https://vk.com/im' />
      </div>
   );
}

export default App;
