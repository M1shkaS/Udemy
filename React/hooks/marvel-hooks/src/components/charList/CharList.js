import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelServices from '../../services/MarvelServices';

import './charList.scss';

const CharList = (props) => {

   const [characters, setCharacters] = useState([]);
   const [offset, setOffset] = useState(210);
   const [newItemLoading, setNewItemLoading] = useState(false);
   const [charEnded, setCharEnded] = useState(false);

   const { error, loading, getAllCharacters } = useMarvelServices();

   const charRefsArr = useRef([]);
   const offsetRef = useRef();
   const hook = useRef(true);

   offsetRef.current = offset;

   const onRequest = (offset, initial) => {

      initial ? setNewItemLoading(false) : setNewItemLoading(true);

      getAllCharacters(offset)
         .then(onCharactersLoaded)
         .finally(() => setNewItemLoading(false))
   }

   useEffect(() => {
      if (newItemLoading && !charEnded) {
         onRequest(offsetRef.current);
      }
   }, [newItemLoading]);

   useEffect(() => {

      onRequest(offsetRef.current, true);

      window.addEventListener('scroll', requesCharacterstScroll);
      return () => {
         window.removeEventListener('scroll', requesCharacterstScroll);
      }

   }, []);

   const removeCharSelected = () => {
      charRefsArr.current.forEach(item => item.classList.remove('char__item_selected'));
   };

   const onFocusCharItems = (idx) => {
      removeCharSelected();
      charRefsArr.current[idx].classList.add('char__item_selected');
      charRefsArr.current[idx].focus();
   };

   const requesCharacterstScroll = (e) => {

      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
         setNewItemLoading(true);
      }
   }

   const onCharactersLoaded = (newCharacters) => {
      let ended = false;
      if (newCharacters.length < 9) {
         ended = true;
      }

      setCharacters((characters) => [...characters, ...newCharacters]);
      setOffset(offset => offset + 9);
      setCharEnded(charEnded => ended);
   }

   function renderList(items) {
      const characters = items.map((item, idx) => {
         const { name, thumbnail, id } = item;

         const checkThumbnail = thumbnail.includes('image_not_available');
         const styleImg = checkThumbnail ? { objectFit: 'unset' } : { objectFit: 'cover' };

         return (
            <li ref={(elem) => charRefsArr.current[idx] = elem}
               tabIndex={0}
               onClick={() => { props.onCharSelected(id); onFocusCharItems(idx) }
               } className="char__item"
               key={id}
               onKeyPress={(e) => {
                  if (e.key === ' ' || e.key === "Enter") {
                     props.onCharSelected(id);
                     onFocusCharItems(idx);
                  }
               }}
            >
               <img style={styleImg} src={thumbnail} alt={name} />
               <div className="char__name">{name}</div>
            </li >
         )
      })

      return (
         <ul className="char__grid" >
            {characters}
         </ul>
      )
   }

   const items = renderList(characters);
   const spinner = loading && !newItemLoading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;

   return (
      <div className="char__list">
         {spinner}
         {errorMessage}
         {items}
         <button
            style={{ 'display': charEnded ? 'none' : 'block' }}
            disabled={newItemLoading}
            onClick={() => setNewItemLoading(true)}
            className="button button__main button__long">
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default CharList;

CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}