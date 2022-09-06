import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
// import { heroAdded } from '../../actions';
import { heroAdded } from '../heroesList/heroesSlice';
import { selectAll } from '../heroesFilters/filtersSlice';
import store from '../../store';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
   const { request } = useHttp();
   const dispatch = useDispatch();
   const filters = selectAll(store.getState());
   const { filtersLoadingStatus } = useSelector(state => state.filters);

   const addHero = (newHero) => {
      const hero = {
         id: uuidv4(),
         ...newHero
      }

      request('http://localhost:3001/heroes', 'POST', JSON.stringify(hero))
         .then(() => dispatch(heroAdded(hero)))
         .catch(error => console.log(error))
   }

   const renderFilters = (filters, status) => {

      if (status === 'loading') {
         return <option >Загрузка фильтров</option>
      } else if (status === 'error') {
         return <option >Произошла ошибка</option>
      }

      if (filters && filters.length > 0) {
         return filters.map(({ label, name }) => {
            if (name === 'all') return;
            return <option key={name} value={name}>{label}</option>
         })
      }
   }

   return (
      <Formik
         initialValues={{ name: '', description: '', element: '' }}
         validationSchema={Yup.object({
            name: Yup.string().
               required('Это поле обязательно').
               min(3, 'Должно быть минимум 3 симвлов'),
            description: Yup.string().
               required('Это поле обязательно').
               min(10, 'Должно быть минимум 10 симвлов'),
            element: Yup.string().
               required('Обязательное поле')
         })}

         onSubmit={(values) => addHero(values)}
      >

         <Form className="border p-4 shadow-lg rounded">
            <div className="mt-3">
               <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
               <Field
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Как меня зовут?" />
            </div>
            <ErrorMessage name="name" className="mb-3" style={{ color: 'red' }} component="div" />
            <div className="mt-3">
               <label htmlFor="text" className="form-label fs-4">Описание</label>
               <Field
                  as='textarea'
                  name="description"
                  className="form-control"
                  id="text"
                  placeholder="Что я умею?"
                  style={{ "height": '130px' }} />
            </div>
            <ErrorMessage name="description" className="mb-3" style={{ color: 'red' }} component="div" />
            <div className="mt-3">
               <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
               <Field
                  as='select'
                  className="form-select"
                  id="element"
                  name="element">
                  <option >Я владею элементом...</option>
                  {renderFilters(filters, filtersLoadingStatus)}
               </Field>
            </div>
            <ErrorMessage name="element" className="mb-3" style={{ color: 'red' }} component="div" />
            <button
               type="submit" className=" mt-3 btn btn-primary">Создать</button>
         </Form>

      </Formik>

   )
}

export default HeroesAddForm;