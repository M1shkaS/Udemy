import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import store from '../../store';

// import { fecthFilters } from "../../actions";
import { filtersChange, fecthFilters, selectAll } from "./filtersSlice";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
   const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
   const filters = selectAll(store.getState());
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fecthFilters());

      // eslint-disable-next-line
   }, [])

   if (filtersLoadingStatus === 'loading') {
      return <Spinner />
   } else if (filtersLoadingStatus === 'error') {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   }

   function renderFiltersButton(buttons) {
      if (buttons.length === 0) {
         return <h5 className="text-center mt-5">Фильтров не найдено</h5>
      }

      return buttons.map(({ label, name, className }) => {
         const btnClass = classNames('btn', className, {
            'active': name === activeFilter
         });
         return <button
            onClick={() => dispatch(filtersChange(name))}
            key={name}
            className={btnClass}>{label}</button>
      })

   }

   const buttons = renderFiltersButton(filters)
   return (
      <div className="card shadow-lg mt-4">
         <div className="card-body">
            <p className="card-text">Отфильтруйте героев по элементам</p>
            <div className="btn-group">
               {buttons}
            </div>
         </div>
      </div>
   )
}

export default HeroesFilters;