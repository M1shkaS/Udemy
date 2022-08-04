import logo from './logo.svg';
import { Component, StrictMode } from 'react';
import './App.css';

//Реакт компонент
const Header = () => {
   return <h2>Hello world</h2>
}

const Field = () => {
   const holder = 'Enter';
   const styledField = {
      width: '300px'
   }
   return <input
      style={styledField}
      placeholder={holder}
      type="text" />
}

function Btn() {
   // const text = 'Click me'
   const res = () => 'Click me';
   const p = <p>Click me</p>
   return <button>{p}</button>
}

//Старый способ
class FieldSecond extends Component {
   render() {
      const holder = 'Enter';
      const styledField = {
         width: '300px'
      }

      return <input
         style={styledField}
         placeholder={holder}
         type="text" />
   }
}

function App() {
   return (
      <div className="App">
         {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header> */}
         {/* Можем дальше что-то вкладывать */}
         {/* <Header></Header> */}

         {/* А можно и просто закрыть сразу */}
         <StrictMode>
            <Header />
         </StrictMode>

         <Field />
         <Btn />
         <FieldSecond />
      </div>
   );
}

export { Header };
export default App;
// Babel занимается переводом из jsx в нативный js

