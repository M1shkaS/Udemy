import './pokemonSearchForm.scss';

const PokemonSearchForm = () => {
   return (
      <div className="pokemon__search-form">
         <form >
            <input type="text" name="pokemonName" placeholder="Имя покемона" />
            <button type="submit" className="button button__main">Найти</button>
         </form>
      </div>
   )
}

export default PokemonSearchForm;