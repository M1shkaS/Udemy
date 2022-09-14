import Spinner from "../components/spinner/Spinner";

const setListConent = (process, Component, newItemLoading) => {
   console.log(process);
   switch (process) {
      case 'waiting':
         return <Spinner />
      case 'loading':
         return !newItemLoading ? <Spinner /> : <Component />
      case 'confirmed':
         return <Component />

      default:
         throw new Error('Unexpected process state');
   }
}

export default setListConent;