import { Component, Fragment } from 'react';
import React from 'react';
import './App.css';

//Эта библиотека позволяет использовать css прям в js с html
//npm install --save styled-components
import styled from 'styled-components'


// В react можно использовать готовые библиотеки
// npm install react-bootstrap bootstrap --save

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

//Вендорные префиксы ставятся автоматически
//Можно делать вложенности
const EmpItem = styled.div`
   padding:20px;
   margin-bottom:20px;
   border-radius: 5px;
   box-shadow:5px 5px 10px rgba(0,0,0, .2);
   a{
      display: block;
      margin: 10px 0 10px 0;
      color: ${props => props.active ? 'orange' : 'black'};
   };
   input{
      display: block;
      margin-top: 10px;
   }
`;
const Header = styled.h2`
   font-size: 22px;
`;

export const Button = styled.button`
   display: block;
   padding: 5px 15px;
   background-color: gold;
   border:1px solid  rgba(0,0,0, .2);
   box-shadow:5px 5px 10px rgba(0,0,0, .2);
`;

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
         //  Fragment помогает убирать обёртку  в вёрстке.Можно применять key React.Fragment key ='123'
         //<> -сокращённая запись Fragment-а и не нужно его импортировать, но к ним нельзя применять key
         // <>Что-то </>
         <EmpItem active>
            {/* 3 способ */}
            <Button onClick={() => this.nextYear()}>{this.state.text}</Button>
            {/* <button onClick={this.nextYear}>{this.state.text}</button> */}
            {/* Вот так можно передавать аргументы в функцию */}
            {/* <button onClick={(e) => this.nextYear(e,'some color')}>{this.state.text}</button> */}


            <Header>My name is {name} , surname - {surname},
               age - {years},
               position - {positions} </Header>
            <a target='_blank' href={link}>My profile</a>
            <form >
               <span>Введите должность</span>
               {/* Change и Input в реакте работает одинаково, а в нативном js inpet сразу после введения значения, а chancge после того как focus  с него будет снят*/}
               <input type="text" onChange={this.commitInputChanges} />
            </form>
         </EmpItem>
      )
   }
}

const Wrapper = styled.div`
   width:600px;
   margin:80px auto 0 auto;
`
// Очень хорошая фича, т.к мы не мутируем сам элемент. Это мб модальное окно или ещё что-то
const DynamicGreating = (props) => {
   return (
      <div className={'mb-3 p-3 border borde-' + props.color}>
         {/* Вместо этой конструкции появятся все те компоненты или элементы, которые мы будем передовать во внутрь этого компонента */}
         {/* {props.children} */}

         {
            React.Children.map(props.children, child => {
               return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
            })
         }
      </div>
   )
}
// Композиция
const HelloGreating = () => {
   return (
      <div>
         <DynamicGreating styled={{ 'width': '600px', 'margin': '0 auto' }} color={'primary'}>
            <h2>Вставка элементов</h2>
         </DynamicGreating>
      </div>
   )
}

const Message = (props) => {
   return (
      <div>{'The props counter ' + props.counter}</div>
   )
}

class Counter extends Component {
   state = {
      counter: 0
   }

   changeCounter = () => {
      this.setState(({ counter }) => ({
         counter: counter + 1
      }))
   }

   render() {
      return (
         <>
            <button onClick={this.changeCounter} className={'btn btn-primary'}>Click me</button>
            {this.props.render(this.state.counter)}
         </>
      )

   }
}

function App() {
   return (
      <Wrapper>
         <Counter render={counter => (
            <Message counter={counter} />
         )} />
         <HelloGreating />
         <DynamicGreating color={'primary'}>
            <h2>Props Children</h2>
            <h2>Вставка элементов</h2>
         </DynamicGreating>
         <WhoAmI name='John' surname='Roga' link='https://vk.com/im' />
         <WhoAmI name='Mi' surname='Sel' link='https://vk.com/im' />
      </Wrapper >
   );
}

export default App;

// Чем композиция лучше, чем наследование в реакте?
// Всегда используется композиция, потому что в реакте есть  встроенные возможности для применения композиций.


// function App() {
//    return (
//       <div className="App">
//          {/* Значение этих атрибутов, котороые мы передаём
//           они не изменяемые, они ток на чтение.
//           Поменять не сможем, а если хотим поменять значение, то нужно полность перерисовывать*/}

//          {/* <WhoAmI name='Misha' surname='Selyavin' link='https://vk.com/im' />
//          <WhoAmI name='Ilya' surname='Roga' link='https://vk.com/im' /> */}

//          {/* <WhoAmI name={{ firstName: 'Andrei' }} surname='Roga' link='https://vk.com/im' /> */}
//          {/* Состояния компонента мы можем динамически менять */}
//          {/* Компоненты бывают классовые и функциональные */}
//          {/* <WhoAmI name={() => 'Mi'} surname='Roga' link='https://vk.com/im' /> */}
//          <WhoAmI name='John' surname='Roga' link='https://vk.com/im' />
//          <WhoAmI name='Mi' surname='Sel' link='https://vk.com/im' />
//       </div>
//    );
// }