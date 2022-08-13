import img from './error.gif'
const ErrorMessage = () => {
   // Конечно прикольно, но лучше так не делать. Такое правильно поместить в сам компнонент Error
   // return <img src={process.env.PUBLIC_URL + '/error.gif'} />

   return <img src={img}
      alt="Error"
      style={{ display: 'block', width: '250px', height: '250px', margin: '0 auto' }}
   />
}

export default ErrorMessage;