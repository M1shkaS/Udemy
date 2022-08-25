import { useState, memo, PureComponent, createContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


// Тоже самое, что и memo в функциональных, только PureComponent в классовых и также ток поверхностное копирование
// class Form extends PureComponent {

//    //! Если вместо  PureComponent используем просто Component, то копирование можно делать так и это также работает со вложенными структурами вместо PureComponent
//    shouldComponentUpdate(prevProps) {
//       if (this.props.mail.name === prevProps.mail.name) {
//          return false
//       } return true
//    }
//    render() {
//       console.log('render');
//       return (
//          <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                <div className="mb-3">
//                   <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                   <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//                </div>
//                <div className="mb-3">
//                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                   <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                </div>
//             </form>
//          </Container>
//       )
//    }
// }

// function compareProps(prevProps, nextProps) {
//    return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// }

// //! Если понимаем, что компонент часто рендерится с одинаковыми свойствами(например курс валют через какое-то время), то надо использовать такую мемоизацию
// const Form = memo((props) => {
//    console.log('render');
//    return (
//       <Container>
//          <form className="w-50 border mt-5 p-3 m-auto">
//             <div className="mb-3">
//                <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//             </div>
//             <div className="mb-3">
//                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//             </div>
//          </form>
//       </Container>
//    )
// }, compareProps)

const Form = (props) => {
   console.log('render');
   return (
      <Container>
         <form className="w-50 border mt-5 p-3 m-auto">
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
               <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
               <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
         </form>
      </Container>
   )
}

function App() {
   const [data, setData] = useState({
      mail: "name@example.com",
      text: 'some text'
   });

   return (
      <>
         <Form mail={data.mail} text={data.text} />
         <button
            onClick={() => setData({
               mail: "name@example.com",
               text: 'some text'
            })}>
            Click me
         </button>
      </>
   );
}

export default App;

// React.memo -сохраняет компонент, если у него не изменились значения пропсов т.е позволяет избежать лишнего рендера
// Это компонент высшего порядка. Сравнение пропсов у нас идёт поверхностное(копия создаётся ток на верхнем уровне вложенности, а на уровне ниже идут уже ссылки на обьект родитель)
//1. Его стоит использовать, если у нас часто приходят какие то пропсы и они не меняются и чтобы не рендерить одно и тоже часто использовать нужно memo
//2.Если мы начнём применять memo к компонентам, которые постоянно получают разные пропсы, то мы добавляем доп действия и замедляем наше приложение
//3. Функции не стоит использовать в качестве пропсов в memo т.к каждый раз создаётся новая функция и будет пункт 2.Ток если мы хотим это обойти то можно использовать useCallback