import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// class Slider extends Component {

//    constructor(props) {
//       super(props);
//       this.state = {
//          autoplay: false,
//          slide: 0
//       }
//    }

//    changeSlide = (i) => {
//       this.setState(({ slide }) => ({
//          slide: slide + i
//       }))
//    }

//    toggleAutoplay = () => {
//       this.setState(({ autoplay }) => ({
//          autoplay: !autoplay
//       }))
//    }

//    render() {
//       return (
//          <Container>
//             <div className="slider w-50 m-auto">
//                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                <div className="buttons mt-3">
//                   <button
//                      className="btn btn-primary me-2"
//                      onClick={() => this.changeSlide(-1)}>-1</button>
//                   <button
//                      className="btn btn-primary me-2"
//                      onClick={() => this.changeSlide(1)}>+1</button>
//                   <button
//                      className="btn btn-primary me-2"
//                      onClick={this.toggleAutoplay}>toggle autoplay</button>
//                </div>
//             </div>
//          </Container>
//       )
//    }
// }


const countTotal = (num) => {
   console.log('Memo');
   return num + 10;
}

const Slider = (props) => {

   //useState() возвращает массив из двух элементов . argq1 - наш state, argq2 - функция, которая будет менять это состояние 
   // Хороший тон
   const [slide, setSlide] = useState(0);
   const [autoplay, setAutoplay] = useState(false);

   function changeSlide(i) {
      setSlide(slide => slide + i);
   }

   function toggleAutoplay() {
      setAutoplay(autoplay => !autoplay);
   }

   function logging() {
      console.log('logging');
   }

   const getSomeImages = useCallback(() => {
      console.log('Feetching');

      return [
         'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
         'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
      ]
   }, [slide]);

   //Вызывается только один раз
   useEffect(() => {
      console.log('One');
   }, []);

   useEffect(() => {
      console.log('More');
      window.addEventListener('click', logging);
      // Удаление
      return () => {
         window.removeEventListener('click', logging)
      }
   });

   //Плохой тон
   // const [state, setState] = useState({ slide: 0, autoplay: false })

   // function changeSlide(i) {
   //    setState(({ slide }) => ({
   //       slide: slide + i
   //    }))
   // }

   // Следит только за изменениями state slide
   useEffect(() => {
      console.log('Update slide');
      document.title = `Slide : ${slide}`;
   }, [slide]);

   // Следит только за изменениями state autoplay
   useEffect(() => {
      console.log('Update Autoplay');
   }, [autoplay]);

   //Закешировали значение
   const total = useMemo(() => {
      return countTotal(slide);
   }, [slide]);

   const style = useMemo(() => ({
      color: slide > 2 ? 'red' : 'yellow'
   }), [slide]);

   useEffect(() => { console.log('styles'); }, [style])

   return (
      <Container>
         <div className="slider w-50 m-auto">
            <Slide getSomeImages={getSomeImages} />
            <div className="text-center mt-5">Active slide {slide} <br />{autoplay ? 'auto' : null} </div>
            <div style={style} className="text-center mt-5">Total slide : {total} </div>
            <div className="buttons mt-3">
               <button
                  className="btn btn-primary me-2"
                  onClick={() => changeSlide(-1)}>-1</button>
               <button
                  className="btn btn-primary me-2"
                  onClick={() => changeSlide(1)}>+1</button>
               <button
                  className="btn btn-primary me-2"
                  onClick={toggleAutoplay}>toggle autoplay</button>
            </div>
         </div>
      </Container>
   )
}

// Не понимаю, у нас корневой же меняется значит рендер идёт заново, соответственно  Slide заново рендериться,  но просто  useEffect не будет работать на img заново же заренедерятся?????
const Slide = ({ getSomeImages }) => {
   const [images, setImages] = useState([]);

   useEffect(() => {
      setImages(getSomeImages());
   }, [getSomeImages]);

   return (
      <>
         {images.map((url, i) =>
            <img key={i} className="d-block w-100" src={url} alt="slide" />
         )}
      </>
   )

}

const ButtonLogout = () => {
   const [logout, setLogout] = useState(false);
   const [text, setText] = useState('Войти')

   function toggleLogout() {
      setLogout((logout) => !logout)

   }

   useEffect(() => {
      console.log('Button');
      setText(logout ? 'Выйти' : 'Войти')
   }, [logout])


   console.log(1);
   return (
      <button onClick={toggleLogout}>{text}</button>
   )
}

function AppFirst() {
   const [slider, setSlider] = useState(true);

   function removeSlider() {
      setSlider(false)
   }
   return (
      <>
         <ButtonLogout />
         <button onClick={removeSlider}>Remove slider</button>
         {slider ? <Slider /> : null}
      </>

   );
}

export default AppFirst;

// Хук это функция, которая активирует некоторые возможности реакта, которые до этого были только в классах

// useEffect(сразу два хука жизненного цикла mount and update) - хук работы с эфектами(операции по загрузке данных, использование сторонних модулей, запуск timeout-ов, логирование или изменение DOM структуры )
// useEffect каждый раз создаёт новую функцию (при рендере компонента или при обновлении state)
// Жуки жизненного(componentDidMount...) цикла и просто хуки(useState,useEffect) это разные вещи
// Подписка - обработчики событий, таймауты, всё то что может быть длительное время и обмениваться данными с компонентом
// 165?

// useMemo - возвращает мемоизированное значение
// Практически тоже самое, ток тут не функция уже, а переменная
// В него нельзя помещать какие-нибудь подписки
// Ещё мы можем мемоизировать обьекты

// useRef -  всё тоже самое, как и в классовых. Любое изменение ref-а не будет заново рендерить компонент (не затрагивает useEffect), как  это делает useState