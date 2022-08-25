import { useState, useEffect, Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// На таком принципе сделаны компоненты высшего порядка(НОС)
// const f = (a) => {
//    return class extends Component {
//       render() {
//          return <h2>F</h2>
//       }
//    }
// }
// f(2)()
// React.memо, который проходил ранее, это компонент НОС
// НОС нужен для того, чтобы оптимизировать код. Например: отрисовка элементов товаров для пользователя и отрисовка что-то похожего для админ панели и там логика +- похожа тогда используем НОС
// НЕГЛАСНОЕ ПРАВИЛЬНО: если  создаём НОС, то в самом начале пишем with....
// Не стоит их создавать когда много пропсов передаётся;дальше, если ток один компонент подходит под этот НОС то очевидно нет смысла тратить на это время; дальше, если мы постоянно модифицируем наш НОС
// Стоит применять когда эта логика подходит ко многим компонентам; статистика и тд


const withSlider = (BaseComponent, getData) => {
   return (props) => {
      const [slide, setSlide] = useState(0);
      const [autoplay, setAutoplay] = useState(false)

      useEffect(() => {
         setSlide(getData());
      }, [])

      function changeSlide(i) {
         setSlide(slide => slide + i);
      }
      return <BaseComponent
         {...props}
         slide={slide}
         autoplay={autoplay}
         changeSlide={changeSlide}
         setAutoplay={setAutoplay}
      />
   }
}

const withLog = (WrapperedComponent) => props => {
   useEffect(() => {
      console.log('Hello');
   }, [])

   return <WrapperedComponent {...props} />
}

const getDataFromFirstFetch = () => { return 10 };
const getDataFromSecondFetch = () => { return 20 };

const SliderFirst = (props) => {
   console.log(props.name);
   return (
      <Container>
         <div className="slider w-50 m-auto">
            <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
            <div className="text-center mt-5">Active slide {props.slide}</div>
            <div className="buttons mt-3">
               <button
                  className="btn btn-primary me-2"
                  onClick={() => props.changeSlide(-1)}>-1</button>
               <button
                  className="btn btn-primary me-2"
                  onClick={() => props.changeSlide(1)}>+1</button>
            </div>
         </div>
      </Container>
   )
}

const SliderSecond = (props) => {

   return (
      <Container>
         <div className="slider w-50 m-auto">
            <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
            <div className="text-center mt-5">Active slide {props.slide} <br />{props.autoplay ? 'auto' : null} </div>
            <div className="buttons mt-3">
               <button
                  className="btn btn-primary me-2"
                  onClick={() => props.changeSlide(-1)}>-1</button>
               <button
                  className="btn btn-primary me-2"
                  onClick={() => props.changeSlide(1)}>+1</button>
               <button
                  className="btn btn-primary me-2"
                  onClick={() => props.setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
            </div>
         </div>
      </Container>
   )
}
const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

const HelloWithLog = withLog(Hello);

function Hello() {
   return <h1>Hello</h1>
}

function AppHoc() {
   return (
      <>
         <HelloWithLog />
         <SliderWithFirstFetch name='Misha' />
         <SliderWithSecondFetch />
      </>
   );
}

export default AppHoc;

// Компонент высшего порядкая
