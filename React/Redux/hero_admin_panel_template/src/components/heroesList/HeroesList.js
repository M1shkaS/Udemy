import { useHttp } from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { createSelector } from 'reselect'

import { fecthHeroes, heroesFetching, heroesFetched, heroesDeleted, heroesFetchingError } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.scss';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

   // Создаёт мемоизированное значение, которое будет проверять, если изменился state, то запустит, если нет то не запустит
   const filteredHeroesSelector = createSelector(
      state => state.heroes.heroes,
      state => state.filters.activeFilter,
      (heroes, activeFilter) => {
         if (activeFilter === 'all') {
            return heroes
         } else {
            return heroes.filter(item => item.element === activeFilter)
         }
      }
   )

   const filteredHeroes = useSelector(filteredHeroesSelector);
   const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);

   const dispatch = useDispatch();
   const { request } = useHttp();

   useEffect(() => {
      dispatch(fecthHeroes(request));

      // eslint-disable-next-line
   }, []);

   // т.к передаём ниже по иерархии и чтобы не вызывать каждый раз перерендер компонента используем  useCallback
   const onDeletedHero = useCallback((id) => {
      request(`http://localhost:3001/heroes/${id}`, 'DELETE')
         .then(() => dispatch(heroesDeleted(id)))
         .catch(() => dispatch(heroesFetchingError()))
      // eslint-disable-next-line
   }, [request])

   if (heroesLoadingStatus === "loading") {
      return <Spinner />;
   } else if (heroesLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   }

   const renderHeroesList = (arr) => {
      if (arr.length === 0) {
         return (
            <CSSTransition
               timeout={0}
               classNames="hero">
               <h5 className="text-center mt-5">Героев пока нет</h5>
            </CSSTransition>
         )
      }

      return arr.map(({ id, ...props }) => {
         return (
            <CSSTransition
               key={id}
               timeout={500}
               classNames="hero"
            >
               <HeroesListItem
                  onDeletedHero={() => onDeletedHero(id)}
                  key={id} {...props} />
            </CSSTransition>
         )
      })
   }

   const elements = renderHeroesList(filteredHeroes);

   return (
      <TransitionGroup component={'ul'}>
         {elements}
      </TransitionGroup>
   )
}

export default HeroesList;