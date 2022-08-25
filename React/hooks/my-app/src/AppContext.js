import { useState, memo, PureComponent, createContext, Component, useContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// const dataContext = createContext({
//    mail: "name@example.com",
//    text: 'some text'
// })

const dataContext = createContext(null)

// Provider предоставляет данные компонентам, которые находятся ниже по иерархии.Consumer - позволяет получить эти данные, подписывается на изменения в контексте
const { Provider, Consumer } = dataContext;

const Form = (props) => {
   console.log('render');
   return (
      <Container>
         <form className="w-50 border mt-5 p-3 m-auto">
            <div className="mb-3">
               <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
               <InputComponent />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
               <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
         </form>
      </Container>
   )
}

// class InputComponent extends Component {
//    static contextType = dataContext;
//    render() {
//       return (
//          // <Consumer>
//          //    {value => {
//          //       return <input value={value.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//          //    }}
//          // </Consumer>
//          <input value={this.context.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//       )
//    }
// }

const InputComponent = () => {
   const context = useContext(dataContext);

   return (
      <input value={context.mail}
         type="email"
         className='form-control'
         id="exampleFormControlInput1"
         placeholder="name@example.com"
         onFocus={context.forceChangeMail}
      />
   )
}

function AppContext() {
   const [data, setData] = useState({
      mail: "name@example.com",
      text: 'some text',
      forceChangeMail: forceChangeMail
   });

   function forceChangeMail() {
      setData({ ...data, mail: 'forceChangeMail' })
   }

   return (
      <>
         <Provider value={data}>
            <Form text={data.text} />
         </Provider>
         <button
            onClick={() => setData({
               mail: "second@example.com",
               text: 'some text',
               forceChangeMail: forceChangeMail
            })}>
            Click me
         </button>
      </>


   );
}

export default AppContext;

//1. для // const dataContext = createContext({
//    mail: "name@example.com",
//    text: 'some text'
// })
// создаётся отдельный файлик обычно и из него берётся
//2. Provider можно поместить в Provider, но лучше так сильно этим не увлекаться

// Если в Provider нет value то в дочерних элементах будет undefined, а если вообще убрать сам Provider,то будут значения по умолчанию, которые были в  1 пункте createContext