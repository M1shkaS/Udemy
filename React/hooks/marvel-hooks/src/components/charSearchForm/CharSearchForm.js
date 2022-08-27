import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelServices from '../../services/MarvelServices';

import './charSearchForm.scss'

const CharSearchForm = () => {

   const [char, setChar] = useState(null)
   const { error, loading, getCharacterByName, clearError } = useMarvelServices();


   const updateChar = (charName) => {
      clearError();

      getCharacterByName(charName)
         .then(onCharLoaded)
   }

   const onCharLoaded = (newChar) => {
      setChar(newChar)
      console.log(newChar);
   }

   const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
   const results = !char ? null : char.length > 0 ?
      <div className='char__search-form-message' >
         <span style={{ color: '#03710E' }}> {`There is! Visit ${char[0].name} page?`}</span>
         <Link to={`/characters/${char[0].id}`}
            className='button button__secondary'
         >
            <div className="inner"> TO PAGE</div>
         </Link>
      </div> :
      <div className='char__search-form-error'>
         <span style={{ color: '#9F0013' }}>The character was not found. Check the name and try again</span>
      </div>;

   console.log(results);
   return (
      <div className="char__search-form">
         <Formik
            initialValues={{
               charName: ''
            }}
            validationSchema={Yup.object({
               charName: Yup.string()
                  .required('Обязательное поле')
            })}
            onSubmit={({ charName }) => { updateChar(charName) }}
         >
            <Form>
               <label >Or find a character by name:</label>
               <Field type="text" name="charName" placeholder='Enter name' />
               <button
                  type='submit'
                  className='button button__main'
                  disabled={loading}
               >
                  <div className="inner"> Find</div>
               </button>
               <FormikErrorMessage className="error" name="text" component="div" />
            </Form>
         </Formik>
         {errorMessage}
         {results}
      </div >
   )
}

export default CharSearchForm