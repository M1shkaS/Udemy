import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelServices from '../../services/MarvelServices';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
   const [char, setChar] = useState(null);
   const { clearError, getCharacter, process, setProcess } = useMarvelServices();

   useEffect(() => {
      updateChar();
   }, [props.charId])

   const updateChar = () => {
      const { charId } = props;

      if (!charId) return;

      clearError();
      getCharacter(charId)
         .then(onCharLoaded)
         .then(() => setProcess('confirmed'))
   }

   const onCharLoaded = (char) => {
      setChar(char);
   }

   return (
      <div className="char__info">
         {setContent(process, View, char)}
      </div>
   )
}

const View = ({ data }) => {
   const { name, description, thumbnail, homepage, wiki, comics } = data;

   let items = null;

   if (comics.length > 0) {
      items = comics.map((item, id) => {

         const comicId = item.resourceURI.slice(-6).replace(/\D/gi, '');
         // eslint-disable-next-line
         if (id > 9) return;
         return (
            <li key={id} className="char__comics-item">
               <Link to={`/comics/${comicId}`}>
                  {item.name}
               </Link>
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
