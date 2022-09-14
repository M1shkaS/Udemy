import classNames from 'classnames';
import './pokemonItem.scss';

const PokemonItem = (props) => {
   const { name, sprites, type, id } = props;

   const getZero = (number) => {
      if (number > 0 && number < 10) {
         return `0${number}`
      }
      return number
   }

   const namePokemon = name[0].toUpperCase() + name.slice(1);

   const itemClass = classNames('pokemon__item', {
      'water': type === 'water',
      'grass': type === 'grass',
      'fire': type === 'fire',
      'bug': type === 'bug',
      'poison': type === 'poison'
   })

   return (
      <li
         tabIndex={0}
         className={itemClass}>
         <div className="pokemon__img">
            <img src={sprites} alt="pokemon" />
         </div>

         <div className="pokemon__body">
            <div className="pokemon__number">#{getZero(id)}</div>
            <div className="pokemon__name">{namePokemon}</div>
            <div className="pokemon__type">Type: {type}</div>
         </div>
      </li>
   )
}

export default PokemonItem;