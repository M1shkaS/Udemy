import { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton'
import MarvelServices from '../../services/MarvelServices';



import './charInfo.scss';


class CharInfo extends Component {

   state = {
      char: null,
      error: false,
      loading: false
   }

   marvelService = new MarvelServices();

   //Выполняется после того как компонент был создан
   componentDidMount() {
      this.updateChar();
      // this.foo.bar = 0;
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.charId !== prevProps.charId) {
         this.updateChar();
      }
   }

   updateChar = () => {
      const { charId } = this.props;

      if (!charId) return;

      this.onCharLoading();

      this.marvelService
         .getCharacter(charId)
         .then(this.onCharLoaded)
         .catch(this.onError);
   }

   onCharLoaded = (char) => {
      this.setState({ char, loading: false })
   }

   onCharLoading = () => {
      this.setState({
         loading: true
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      });
   }

   render() {
      const { char, loading, error } = this.state;
      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = !(error || loading || !char) ? <View char={char} /> : null
      const sceleton = char || spinner || error ? null : <Skeleton />;
      return (
         <div className="char__info">
            {errorMessage}
            {content}
            {spinner}
            {sceleton}
         </div>
      )
   }
}

const View = ({ char }) => {
   const { name, description, thumbnail, homepage, wiki, comics } = char;

   let items = null;

   if (comics.length > 0) {
      items = comics.map((item, id) => {
         // eslint-disable-next-line
         if (id > 9) return;

         return (
            <li key={id} className="char__comics-item">
               {item.name}
            </li>
         )
      })
   } else {
      items = 'Комиксов нет';
   }

   const checkThumbnail = thumbnail.includes('image_not_available');
   const styleImg = checkThumbnail ? { objectFit: 'contain' } : { objectFit: 'cover' };

   return (
      <>
         <div className="char__basics">
            <img style={styleImg} src={thumbnail} alt={name} />
            <div>
               <div className="char__info-name">{name}</div>
               <div className="char__btns">
                  <a href={homepage} className="button button__main">
                     <div className="inner">homepage</div>
                  </a>
                  <a href={wiki} className="button button__secondary">
                     <div className="inner">Wiki</div>
                  </a>
               </div>
            </div>
         </div>
         <div className="char__descr">
            {description}
         </div>
         <div className="char__comics">Comics:</div>
         <ul className="char__comics-list">
            {items}
         </ul>
      </>
   )
}
export default CharInfo;

// С помощью PropTypes можно устанавливать дефолтные значения по умолчанию
CharInfo.propTypes = {
   charId: PropTypes.number
}

// Предохранители стали обязательными. Предохранители - это классовые компоненты, которые оборачивают другие компоненты и если в их дочерних компонентах происходит ошибка, то они будут её ловить и ломается лишь этот компонент, а не всё
// Они ловят не все ошибки. Только ошибки при запуске метода render, методы жизненного цикла и в конструкторах дочернего компонента
// НЕ ЛОВЯТ. Ошибки, которые произошли в обработчиках событий, в ассинхроном коде, в самом предохранителе