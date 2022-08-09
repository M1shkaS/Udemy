

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   geners: [],
   privat: true,
   start: () => {
      personalMovieDB.count = Math.round(safeReadInteger('Сколько фильмов вы уже посмотрели?'));
   },
   rememberFilms: function () {
      for (let i = 0; i < 2; i++) {
         let lastFilm, filmRaiting;

         while (true) {
            lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
            filmRaiting = prompt('На сколько оцените его ?', '').trim();
            if (lastFilm != null && filmRaiting != null && filmRaiting != '' && lastFilm.length != 0 && lastFilm.length <= 50) break;
         }

         personalMovieDB.movies[lastFilm] = filmRaiting;
      };
   },
   checkLevelPersonalMovies: function () {
      if (personalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
         console.log('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка');
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         personalMovieDB.geners[i] = safeReadString(`Ваш любимый жанр под номером ${i + 1}`);
      }
      personalMovieDB.geners.forEach((item, idx) => {
         console.log(`Любимый жанр ${++idx} - это ${item}`);
      })
   },
   toggleVisibleMyDB: function () {
      personalMovieDB.privat = personalMovieDB.privat ? false : true;
   }
};

personalMovieDB.start();
personalMovieDB.rememberFilms();
personalMovieDB.checkLevelPersonalMovies();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
showMyDB(personalMovieDB);

function safeReadInteger(text) {
   let number;
   while (true) {
      number = +prompt(text, '1');
      if (!isNaN(number) && !(number < 0) && number != '') break;
   }
   return number;
}

function safeReadString(text) {
   let str;
   while (true) {
      str = prompt(text, '');
      if (str != null && str != '') break;
   }
   return str;
}

function showMyDB(hiddenObj) {
   if (!hiddenObj.privat) {
      console.log(hiddenObj);
   } else {
      console.log('Просмотр запрещён');
   }
}


