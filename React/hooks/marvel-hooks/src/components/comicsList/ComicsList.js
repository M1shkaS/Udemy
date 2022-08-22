import { useState, useEffect } from 'react';
import useMarvelServices from '../../services/MarvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const ComicsList = () => {
   const { error, loading, getAllComics } = useMarvelServices();

   const [comics, setComics] = useState([]);
   const [offset, setOffset] = useState(0);
   const [comicsEnded, setComicsEnded] = useState(false);
   const [newComicsLoading, setNewComicsLoading] = useState(false);

   useEffect(() => {
      onRequest(offset, true);

      window.addEventListener('scroll', requesCharacterstScroll);
      return () => {
         window.removeEventListener('scroll', requesCharacterstScroll)
      }
   }, [])

   useEffect(() => {
      if (!comicsEnded && newComicsLoading) {
         onRequest(offset);
      }

   }, [newComicsLoading])

   const requesCharacterstScroll = (e) => {
      if (comicsEnded) {
         window.removeEventListener('scroll', requesCharacterstScroll)
      }

      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
         setNewComicsLoading(true);
      }
   }

   const onRequest = (offset, initial) => {
      initial ? setNewComicsLoading(false) : setNewComicsLoading(true);

      getAllComics(offset)
         .then(onComicsLoaded)
         .finally(() => setNewComicsLoading(false))
   }

   const onComicsLoaded = (newComics) => {
      let ended = false;
      if (newComics.length < 8) {
         ended = true;
      }

      setComics((comics) => [...comics, ...newComics]);
      setOffset(offset => offset + 8);
      setComicsEnded(comicsEnded => ended);
   }

   function renderList(items) {
      const comics = items.map((item, idx) => {
         const { title, price, thumbnail, id } = item;

         const checkThumbnail = thumbnail.includes('image_not_available');
         const styleImg = checkThumbnail ? { objectFit: 'unset' } : { objectFit: 'cover' };

         return (
            <li className="comics__item" key={idx}>
               <a href="#">
                  <img style={styleImg} src={thumbnail} alt="ultimate war" className="comics__item-img" />
                  <div className="comics__item-name">{title}</div>
                  <div className="comics__item-price">{price}</div>
               </a>
            </li>
         )
      })
      return (
         <ul className="comics__grid">
            {comics}
         </ul>
      )
   }

   const items = renderList(comics);
   const spinner = loading && !newComicsLoading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;

   return (
      <div className="comics__list">
         {items}
         {spinner}
         {errorMessage}
         <button
            style={error || comicsEnded ? { display: 'none' } : { display: 'block' }}
            onClick={() => setNewComicsLoading(true)}
            className="button button__main button__long"
            disabled={newComicsLoading}
         >
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList;