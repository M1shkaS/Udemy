import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useMarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import AppBanner from '../appBanner/AppBanner';


const SinglePage = ({ dataType, Component }) => {
   const { id } = useParams()
   const { loading, error, getComic, getCharacter, clearError } = useMarvelServices();
   const [data, setData] = useState(null);

   useEffect(() => {
      updateData()
   }, [id])

   const updateData = () => {
      clearError();
      switch (dataType) {
         case 'comic':
            getComic(id)
               .then(onDataLoaded)
            break;
         case 'character':
            getCharacter(id)
               .then(onDataLoaded)
            break;
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   console.log(Component);
   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;
   const content = !(loading || error || !data) ? <Component data={data} /> : null;

   return (
      <>
         <AppBanner />
         {spinner}
         {errorMessage}
         {content}
      </>
   )
}

export default SinglePage;