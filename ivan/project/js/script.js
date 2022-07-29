
'use strict';

/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

document.addEventListener('DOMContentLoaded', () => {

   function firstTask() {
      blockAdvertisings.forEach(item => {
         item.remove();
      });

      promoGenre.textContent = 'Драма';

      promoBg.style.background = 'url("img/bg.jpg")';
   }

   function addFilms(parent, movies) {

      parent.innerHTML = ''

      movies.sort();

      movies.forEach((item, idx) => {
         let film = document.createElement('li');

         film.classList.add('promo__interactive-item');
         film.innerHTML = `${idx + 1}. ${item}
                        <div class="delete"></div>`;
         parent.append(film);
      });

      document.querySelectorAll('.delete').forEach((item, i) => {
         item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addFilms(promoInteractiveList, movieDB.movies);
         })
      })
   }

   function createFilm() {
      formAdd.addEventListener('submit', (e) => {
         e.preventDefault();

         let film = inputAdd.value;

         if (film === '') {
            console.log('Введите корректное значение');
         } else {
            if (film.length > 21) {
               film = `${film.slice(0, 26)}...`;
            }

            movieDB.movies.push(film);
            addFilms(promoInteractiveList, movieDB.movies);

            if (checkBox.checked) console.log('Добавляем любимый фильм');

            //Сбрасываем форму
            e.target.reset();
         }

      })
   }

   const movieDB = {
      movies: [
         "Логан",
         "Лига справедливости",
         "Ла-ла лэнд",
         "Одержимость",
         "Скотт Пилигрим против..."
      ]
   };

   const blockAdvertisings = document.querySelectorAll('.promo__adv img'),
      promoContent = document.querySelector('.promo__content'),
      promoBg = promoContent.querySelector('.promo__bg'),
      promoGenre = promoContent.querySelector('.promo__genre'),
      promoInteractiveList = promoContent.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('.add'),
      inputAdd = formAdd.querySelector('input'),
      checkBox = formAdd.querySelector('[type="checkbox"]');
   createFilm();
   firstTask();
   addFilms(promoInteractiveList, movieDB.movies);
});


