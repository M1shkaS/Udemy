import { useHttp } from '../hooks/http.hook';

const useMarvelServices = () => {
   const { error, loading, request, clearError, process, setProcess } = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=7003a06bfb4ab4d72d650777a0f77351';
   const _baseOffset = 210;

   // Персонажи
   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformChar)
   };

   const getCharacter = async (characterId) => {
      const res = await request(`${_apiBase}characters/${characterId}?${_apiKey}`);
      return _transformChar(res.data.results[0]);
   }

   const getCharacterByName = async (name) => {
      const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
      return res.data.results.map(_transformChar);
   }
   // Комиксы
   const getAllComics = async (offset = 0) => {
      const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformComics);
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);
      return _transformComics(res.data.results[0]);
   }

   const _transformChar = (char) => {
      const descr = char.description ? char.description.slice(0, 210) + '...' : 'Извините, данных нет';
      return {
         id: char.id,
         name: char.name,
         description: descr,
         thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items
      }
   }
   const _transformComics = (comics) => {
      const descr = comics.description ? comics.description : 'Извините, описания данного комикса нет';
      return {
         id: comics.id,
         title: comics.title,
         description: descr,
         pageCount: comics.pageCount ? `${comics.pageCount} pages.` : 'No information about the number of pages',
         thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
         language: comics.textObjects.language || 'en-us',
         price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
      }
   }

   return {
      error,
      loading,
      getAllCharacters,
      getCharacter,
      clearError,
      getAllComics,
      getComic,
      getCharacterByName,
      process,
      setProcess
   }
}

export default useMarvelServices;