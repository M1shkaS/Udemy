import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelServices from '../../services/MarvelServices';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import setListContent from '../../utils/setListContent';

import './comicsList.scss';

const ComicsList = () => {
   const { error, getAllComics, process, setProcess } = useMarvelServices();

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
         .then(() => setProcess('confirmed'))
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
            <CSSTransition
               key={idx}
               timeout={500}
               classNames="comics__item">
               <li className="comics__item" >
                  <Link to={`/comics/${id}`}>
                     <img style={styleImg} src={thumbnail} alt="ultimate war" className="comics__item-img" />
                     <div className="comics__item-name">{title}</div>
                     <div className="comics__item-price">{price}</div>
                  </Link>
               </li>
            </CSSTransition>
         )
      })
      return (
         <ul className="comics__grid">
            <TransitionGroup component={null}>
               {comics}
            </TransitionGroup>

         </ul>
      )
   }

   return (
      <div className="comics__list">
         {setListContent(process, () => renderList(comics), newComicsLoading)}

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