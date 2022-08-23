import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
   return (
      <div>
         <ErrorMessage />
         <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
         <Link to='/' style={{ 'textDecoration': 'underline', 'display': 'block', 'marginTop': '20px', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}> Back to main page</Link>
      </div>
   )
}

export default Page404;

