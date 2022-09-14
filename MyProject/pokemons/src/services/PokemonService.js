import useHttp from "../hook/http.hook";

const useMarvelService = () => {
   const { request, process, setProcess } = useHttp();

   const _baseOffset = 0;

   const getAllPokemons = async (offset = _baseOffset) => {
      const res = await request(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`);
      return res.results;
   }

   const getPokemonData = async (url) => {
      const res = await request(url);
      return _transformPokemon(res);
   }

   const _transformPokemon = (pokemon) => {
      return {
         id: pokemon.id,
         name: pokemon.name,
         sprites: pokemon.sprites.back_default,
         type: pokemon.types[0].type.name
      }
   }

   return { getAllPokemons, getPokemonData, process, setProcess };
}

export default useMarvelService;