import AppHeader from "../appHeader/AppHeader";
import PokemonSearchForm from "../pokemonSearchForm/PokemonSearchForm";
import PokemonList from "../pokemonList/PokemonList";

import Spinner from "../spinner/Spinner";

import './app.scss';

function App() {
   return (
      <div className="app">
         <AppHeader />
         <PokemonSearchForm />
         <div className="pokemon__content">
            <PokemonList />
         </div>

      </div>
   );
}

export default App;
