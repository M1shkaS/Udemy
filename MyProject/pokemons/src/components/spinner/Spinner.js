import spinner from '../../resources/spinner/spinner.gif'

const Spinner = () => {
   return (
      <>
         <img
            style={
               {
                  margin: '0 auto',
                  display: 'block',
               }
            }
            src={spinner}
            alt="spinner" />
      </>
   )
}

export default Spinner;