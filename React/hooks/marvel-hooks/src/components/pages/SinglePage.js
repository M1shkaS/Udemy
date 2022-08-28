import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useMarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';
import setContent from '../../utils/setContent';


const SinglePage = ({ dataType, Component }) => {
   const { id } = useParams()
   const { getComic, getCharacter, clearError, process, setProcess } = useMarvelServices();
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
               .then(() => setProcess('confirmed'))
            break;
         case 'character':
            getCharacter(id)
               .then(onDataLoaded)
               .then(() => setProcess('confirmed'))
            break;
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   return (
      <>
         <AppBanner />
         {setContent(process, Component, data)}

      </>
   )
}

export default SinglePage;