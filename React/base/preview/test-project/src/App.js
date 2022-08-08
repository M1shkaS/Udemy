import { Component } from 'react';
import './App.css';

//Функциональный компонент т.к обьявлен через функцию
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
         text: '+++',
         positions: ''
      }
      // 1 способ
      // Чтобы не терять контекст this, если не стрелочная функция
      // this.nextYear = this.nextYear.bind(this)
   }
   // 1способ
   nextYear() {
      this.setState(state => ({
         years: state.years + 1,
      }))
   }
   // 2 способ
   // nextYear = () => {
   //    // console.log('+++');

   //    //Изменяет состояние
   //    //Перерисовка элемента с новым состоянием
   //    //Эта команда выполняется ассинроно
   //    //Не особо зависит от предыдущего состояния
   //    // this.setState({
   //    //    years: this.state.years + 1,
   //    // })

   //    //Избавися от ассинрнностиa
   //    //Пишем круглые скобки, потому что так короче и заменяем слово return
   //    //Это всё пишем, если зависит от предыдущего состояния
   //    //setState меняет всё что указано, а предыдущие "text" не трогает
   //    this.setState(state => ({
   //       years: state.years + 1,
   //    }))
   // }

   // this указывает на один экземпляр класса, чтобы у каждого компонента были свои свойства и state-ы
   commitInputChanges = (e) => {
      // Когда обработчик события срабатывает, то контекст вызова this теряется
      // Если будем делать как обычную функцию(не стрелочную), то this будет ошибкой
      // Каждый раз как выполняется  setState,  то вызывается  постоянно render и по алгоритму поменяются те элементы, которые нужно поменять
      this.setState({
         positions: e.target.value
      })
   }

   render() {
      // 
      const { name, surname, link } = this.props;
      const { positions, years } = this.state
      return (
         // Внутренности важнее оболочки
         <div>
            {/* 3 способ */}
            <button onClick={() => this.nextYear()}>{this.state.text}</button>
            {/* <button onClick={this.nextYear}>{this.state.text}</button> */}
            {/* Вот так можно передавать аргументы в функцию */}
            {/* <button onClick={(e) => this.nextYear(e,'some color')}>{this.state.text}</button> */}


            <h1>My name is {name} , surname - {surname},
               age - {years},
               position - {positions} </h1>
            <a target='_blank' href={link}>My profile</a>
            <form >
               <span>Введите должность</span>
               {/* Change и Input в реакте работает одинаково, а в нативном js inpet сразу после введения значения, а chancge после того как focus  с него будет снят*/}
               <input type="text" onChange={this.commitInputChanges} />
            </form>
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
