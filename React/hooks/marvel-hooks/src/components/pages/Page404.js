import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
   return (
      <div>
         <Helmet>
            <meta name="description" content="This page was not found" />
            <title>Page 404</title>
         </Helmet>
         <ErrorMessage />
         <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
         <Link to='/' style={{ 'textDecoration': 'underline', 'display': 'block', 'marginTop': '20px', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}> Back to main page</Link>
      </div>
   )
}

export default Page404;

