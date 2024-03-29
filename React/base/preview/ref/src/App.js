import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './App.css';

function useInpitWithValidate(initialValue) {
   const [value, setValue] = useState(initialValue);

   const onChange = event => {
      setValue(event.target.value);
   }

   const validateInput = () => {
      return value.search(/\d/) >= 0
   }

   return { value, onChange, validateInput }
}


const Form = () => {
   // const [text, setText] = useState('');
   // const [textArea, setTextArea] = useState('');
   const input = useInpitWithValidate('');
   const textArea = useInpitWithValidate('');


   const color = input.validateInput() ? 'text-danger' : null;

   return (
      <Container>
         <form className="w-50 border mt-5 p-3 m-auto">
            <div className="mb-3">
               <input value={`${input.value} / ${textArea.value}`} type='text' className={`form-control ${color}`} readOnly={true} />
               <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
               <input onChange={input.onChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
               <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={textArea.onChange}
               ></textarea>
            </div>
         </form>
      </Container>
   )
}

const Portal = (props) => {
   const node = document.createElement('div');
   document.body.appendChild(node)
   return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
   return (
      <div
         style={{
            'width': '500px',
            'height': '150px',
            'backgroundColor': 'red',
            'position': 'absolute',
            'right': '0',
            'bottom': '0'
         }}>
         Hello
      </div>

   )
}


function App() {
   return (
      <Form />
   );
}

export default App;
// ReF
// class Form extends Component {
//    myRef = React.createRef();

//    componentDidMount() {
//       this.myRef.current.focus();
//    }

//    focusFirstTI = () => {
//       this.myRef.current.focus();
//    }

//    render() {
//       return (
//          <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                <div className="mb-3">
//                   <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                   <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//                </div>
//                <div className="mb-3">
//                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                   <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                </div>
//             </form>
//          </Container>
//       )
//    }
// }



// class Form extends Component {

//    state = {
//       advOpen: false
//    }

//    componentDidMount() {
//       setTimeout(this.handleClick, 3000)
//    }

//    handleClick = () => {
//       this.setState(({ advOpen }) => ({
//          advOpen: !advOpen
//       }))
//    }

//    render() {
//       return (
//          <Container>
//             <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto"
//                style={{
//                   'overflow': 'hidden',
//                   'position': 'relative'
//                }}>
//                <div className="mb-3">
//                   <input value={text}></input>
//                   <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//                </div>
//                <div className="mb-3">
//                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                </div>
//                {/* {
//                   this.state.advOpen ?
//                      <Portal>
//                         <Msg />
//                      </Portal>
//                      : null
//                } */}

//             </form>
//          </Container>
//       )
//    }
// }

