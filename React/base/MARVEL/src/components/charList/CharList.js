import { Component } from 'react';
import PropTypes from 'prop-types'

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import MarvelServices from '../../services/MarvelServices';


import './charList.scss';

class CharList extends Component {
   state = {
      loading: true,
      error: false,
      characters: [],
      offset: 210,
      newItemLoading: false,
      charEnded: false
   }
   marvelService = new MarvelServices();

   charRefsArr = [];

   setCharRef = (elem) => {
      this.charRefsArr.push(elem)
   }

   removeCharSelected = () => {
      this.charRefsArr.forEach(item => item.classList.remove('char__item_selected'));
   }

   onFocusCharItems = (idx) => {

      this.removeCharSelected();
      this.charRefsArr[idx].classList.add('char__item_selected');
      this.charRefsArr[idx].focus();
      console.dir(this.charRefsArr[idx]);
   }


   componentDidMount() {
      if (this.state.offset < 219) {
         this.updateCharacters();
      }

      window.addEventListener('scroll', this.requesCharacterstScroll)
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.requesCharacterstScroll);
   }

   requesCharacterstScroll = () => {
      const { offset, newItemLoading, charEnded } = this.state;

      if (offset < 219) return;
      if (newItemLoading) return;
      if (charEnded) window.removeEventListener('scroll', this.requesCharacterstScroll);

      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
         this.onRequest(offset);
      }
   }

   updateCharacters = () => {
      this.onRequest();
   }

   onRequest = (offset) => {
      this.onCharactersLoading();

      this.marvelService
         .getAllCharacters(offset)
         .then(this.onCharactersLoaded)
         .catch(this.onError)
   }

   onCharactersLoading = () => {
      this.setState({ newItemLoading: true })
   };

   onCharactersLoaded = (newCharacters) => {
      let ended = false;
      if (newCharacters.length < 9) {
         ended = true;
      }
      this.setState(({ characters, offset }) => ({
         characters: [...characters, ...newCharacters],
         loading: false,
         newItemLoading: false,
         offset: offset + 9,
         charEnded: ended
      }));
   }

   onError = () => {
      this.setState({ error: true, loading: false });
   }

   renderList = (items) => {
      const characters = items.map((item, idx) => {
         const { name, thumbnail, id } = item;

         const checkThumbnail = thumbnail.includes('image_not_available');
         const styleImg = checkThumbnail ? { objectFit: 'unset' } : { objectFit: 'cover' };
         return (
            <li ref={this.setCharRef} tabIndex={0} onClick={() => { this.props.onCharSelected(id); this.onFocusCharItems(idx) }
            } className="char__item" key={id} >
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

   render() {
      // this.foo.bar = 0;
      const { loading, error, characters, newItemLoading, offset, charEnded } = this.state;

      const items = this.renderList(characters);
      const spinner = loading ? <Spinner /> : null;
      const errorMessage = error ? <ErrorMessage /> : null;
      const content = !(error || loading) ? items : null

      return (
         <div className="char__list">
            {spinner}
            {errorMessage}
            {content}
            <button
               style={{ 'display': charEnded ? 'none' : 'block' }}
               disabled={newItemLoading}
               onClick={() => this.onRequest(offset)}
               className="button button__main button__long">
               <div className="inner">load more</div>
            </button>
         </div>
      )
   }

}

export default CharList;

CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}