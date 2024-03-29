import { Component } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelServices from '../../services/MarvelServices';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {

   state = {
      char: {},
      loading: true,
      error: false
   }

   componentDidMount() {
      this.updateChar();
      // this.timerId = setInterval(this.updateChar, 3000);
      // this.foo.bar = 0;
   }

   componentWillUnmount() {
      // clearInterval(this.timerId);
   }

   marvelService = new MarvelServices();

   onCharLoaded = (char) => {
      this.setState({
         char,
         loading: false
      });
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      });
   }

   updateChar = () => {
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
      this.onUpdateChar();
      this.marvelService
         .getCharacter(id)
         .then(this.onCharLoaded)
         .catch(this.onError)
   }

   onUpdateChar = () => {
      this.setState({
         loading: true
      });

   }

   render() {
      const { char, loading, error } = this.state;
      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = !(error || loading) ? <View char={char} /> : null;

      //Условный рендеринг
      return (
         <div className="randomchar">

            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
               <p className="randomchar__title">
                  Random character for today!<br />
                  Do you want to get to know him better?
               </p>
               <p className="randomchar__title">
                  Or choose another one
               </p>
               <button onClick={this.updateChar} className="button button__main">
                  <div className="inner">try it</div>
               </button>
               <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
         </div>
      )
   }
}

const View = ({ char }) => {
   const { name, thumbnail, homepage, wiki, description } = char;

   const checkThumbnail = thumbnail.includes('image_not_available');
   const styleImg = checkThumbnail ? { objectFit: 'contain' } : { objectFit: 'cover' }


   return (
      <div className="randomchar__block">
         <img src={thumbnail} alt="Random character" style={styleImg} className="randomchar__img" />
         <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
               {description}
            </p>
            <div className="randomchar__btns">
               <a href={homepage} className="button button__main">
                  <div className="inner">homepage</div>
               </a>
               <a href={wiki} className="button button__secondary">
                  <div className="inner">Wiki</div>
               </a>
            </div>
         </div>
      </div>
   )
}

export default RandomChar;


// Если в app мы удалим RandomChar и в нём будет setInterval и не будет  clearInterval, то он он будет продолжать работать и это плохо(утечка памяти)