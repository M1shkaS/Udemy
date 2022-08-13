import { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import MarvelServices from '../../services/MarvelServices';

import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {
   state = {
      loading: true,
      error: false,
      characters: []
   }
   marvelService = new MarvelServices();

   componentDidMount() {
      this.updateCharacters();
   }

   updateCharacters = () => {
      this.marvelService
         .getAllCharacters()
         .then(this.onCharactersLoaded)
         .catch(this.onError)
   }

   onError = () => {
      this.setState({ error: true, loading: false })
   }

   onCharactersLoaded = (characters) => {
      this.setState({
         characters,
         loading: false
      });

   }

   renderList = (items) => {
      const characters = items.map((item) => {
         const { name, thumbnail, id } = item;

         const checkThumbnail = thumbnail.includes('image_not_available');
         const styleImg = checkThumbnail ? { objectFit: 'unset' } : { objectFit: 'cover' };
         return (
            <li onClick={() => this.props.onCharSelected(id)} className="char__item" key={id}>
               <img style={styleImg} src={thumbnail} alt={name} />
               <div className="char__name">{name}</div>
            </li>
         )
      })

      return (
         <ul className="char__grid">
            {characters}
         </ul>
      )
   }

   render() {
      const { loading, error, characters } = this.state;

      const items = this.renderList(characters);
      const spinner = loading ? <Spinner /> : null;
      const errorMessage = error ? <ErrorMessage /> : null;
      const content = !(error || loading) ? items : null

      return (
         <div className="char__list">
            {spinner}
            {errorMessage}
            {content}
            <button className="button button__main button__long">
               <div className="inner">load more</div>
            </button>
         </div>
      )
   }

}

// const View = () => {
//    return (

//    )
// }
export default CharList;