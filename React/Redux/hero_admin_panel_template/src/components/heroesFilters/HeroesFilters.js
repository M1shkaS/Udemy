import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtersFetching, filtersFetched, filtersFetchingError, filtersChange } from "../../actions";
import classNames from "classnames";
import Spinner from '../spinner/Spinner';
import { useHttp } from "../../hooks/http.hook";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
   const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);

   const { request } = useHttp();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(filtersFetching());

      request("http://localhost:3001/filters")
         .then(data => dispatch(filtersFetched(data)))
         .catch(() => dispatch(filtersFetchingError()))
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