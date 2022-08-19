import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton'
import MarvelServices from '../../services/MarvelServices';

import './charInfo.scss';

const CharInfo = (props) => {
   const [char, setChar] = useState(null);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const marvelService = new MarvelServices();

   useEffect(() => {
      updateChar();
   }, [props.charId])


   const updateChar = () => {
      const { charId } = props;

      if (!charId) return;

      onCharLoading();

      marvelService
         .getCharacter(charId)
         .then(onCharLoaded)
         .catch(onError);
   }

   const onCharLoaded = (char) => {
      setChar(char);
      setLoading(false);
   }

   const onCharLoading = () => {
      setLoading(true);
   }

   const onError = () => {
      setError(true);
      setLoading(false);
   }
   const errorMessage = error ? <ErrorMessage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(error || loading || !char) ? <View char={char} /> : null;
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

CharInfo.propTypes = {
   charId: PropTypes.number
}
