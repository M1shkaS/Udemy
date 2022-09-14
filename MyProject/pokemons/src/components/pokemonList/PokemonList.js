import { useState, useEffect, useMemo } from "react";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import PokemonItem from "../pokemonItem/PokemonItem";
import useMarvelService from "../../services/PokemonService";
import setListConent from "../../utils/setListConent";

import './pokemonList.scss';

const PokemonList = () => {
   const [pokemons, setPokemons] = useState([]);
   const [offset, setOffset] = useState(0);
   const [newItemLoading, setNewItemLoading] = useState(false);

   const { getAllPokemons, getPokemonData, process, setProcess } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
   }, [])

   const onRequest = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true);

      getAllPokemons(offset)
         .then(onPokemonsLoaded)
   }

   const onPokemonsLoaded = (pokemonsData) => {

      const newPokemons = pokemonsData.map(async ({ url }) => {
         return await getPokemonData(url)
      })

      Promise.all(newPokemons).then(value => {
         setPokemons(oldPokemons => [...oldPokemons, ...value]);
         setOffset((offset) => offset + 24);
         setNewItemLoading(false);
         setProcess('confirmed');
      });
   }

   const renderList = (newPokemons) => {
      let poke = [];

      if (newPokemons.length === 0) {
         return <div>Покемонов нет</div>
      } else {
         poke = newPokemons.map(({ id, ...pokemon }) => {
            return (
               <CSSTransition
                  key={id}
                  timeout={Math.round(300 + Math.random() * 1000)}
                  classNames="pokemon__item"
               >

                  <PokemonItem id={id}{...pokemon} />
               </CSSTransition>
            )
         })
      }

      return (
         <TransitionGroup component={'ul'} className='pokemon__items'>
            {poke}
         </TransitionGroup>
      )
   }

   const elements = useMemo(() => {
      return setListConent(process, () => renderList(pokemons), newItemLoading)
   }, [process])

   return (
      <div className="pokemon__list">
         <h2 className="pokemon__title">Pokemons</h2>
         {elements}
         <button
            onClick={() => onRequest(offset)}
            className="button button__more"
            disabled={newItemLoading}
         >Загрузить ещё</button>
      </div >
   )
}

export default PokemonList;