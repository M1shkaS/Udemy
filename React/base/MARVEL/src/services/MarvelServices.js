
class MarvelServices {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=7003a06bfb4ab4d72d650777a0f77351';

   getResourses = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Error, status: ${res.status}`);
      }
      return await res.json();
   }


   getAllCharacters = async () => {
      const res = await this.getResourses(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
      return res.data.results.map(this._transformChar)
   };

   getCharacter = async (characterId) => {
      const res = await this.getResourses(`${this._apiBase}characters/${characterId}?${this._apiKey}`);
      return this._transformChar(res.data.results[0]);
   }

   _transformChar = (char) => {
      const descr = char.description ? char.description.slice(0, 220) + '...' : 'Извините, данных нет';
      return {
         name: char.name,
         description: descr,
         thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url
      }
   }

}

export default MarvelServices;