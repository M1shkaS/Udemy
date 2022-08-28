import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';

const setListContent = (process, Component, newItemLoading) => {
   switch (process) {
      case 'waiting':
         return <Spinner />
      case 'loading':
         return !newItemLoading ? <Spinner /> : <Component />
      case 'error':
         return <ErrorMessage />
      case 'confirmed':
         return <Component />
      default:
         throw new Error('Unexpected process state');
   }
}

export default setListContent;