import { Component } from 'react';
import './App.css';

//Функциональный компонент т.к обьявлен черезщ функцию
//props - это обьект с вещами, которые мы туда передадим
//Даже, если мы его сюда не передадим он будет существовать
//В качестве пропсов можно передавать всё что угодно
// function WhoAmI({ name, surname, link }) {
//    return (
//       // Внутренности важнее оболочки
//       <div>
//          <h1>My name is {name()} , surname - {surname} </h1>
//          <a target='_blank' href={link}>My profile</a>
//       </div>
//    )
// }
// Пропсы нельзя менять, а состояния можно

//Пропсы внутри классовых компонентов
class WhoAmI extends Component {
   constructor(props) {
      super(props);
      // Состояние
      this.state = {
         years: 28,
         text: '+++'
      }
   }
   nextYear = () => {
      // console.log('+++');

      //Изменяет состояние
      //Перерисовка элемента с новым состоянием
      //Эта команда выполняется ассинроно
      //Не особо зависит от предыдущего состояния
      // this.setState({
      //    years: this.state.years + 1,
      // })

      //Избавися от ассинрнности
      //Пишем круглые скобки, потому что так короче и заменяем слово return
      //Это всё пишем, если зависит от предыдущего состояния
      //setState меняет всё что указано, а предыдущие "text" не трогает
      this.setState(state => ({
         years: state.years + 1,
      }))
   }
   render() {
      const { name, surname, link } = this.props;
      return (
         // Внутренности важнее оболочки
         <div>
            <button onClick={this.nextYear}>{this.state.text}</button>
            <h1>My name is {name} , surname - {surname}, age - {this.state.years} </h1>
            <a target='_blank' href={link}>My profile</a>
         </div>
      )
   }
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
         {/* Состояния компонента мы можем динамически менять */}
         {/* Компоненты бывают классовые и функциональные */}
         {/* <WhoAmI name={() => 'Mi'} surname='Roga' link='https://vk.com/im' /> */}
         <WhoAmI name='John' surname='Roga' link='https://vk.com/im' />
         <WhoAmI name='Mi' surname='Sel' link='https://vk.com/im' />
      </div>
   );
}

export default App;
