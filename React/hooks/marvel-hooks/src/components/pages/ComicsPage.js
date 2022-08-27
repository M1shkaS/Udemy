import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
   return (
      <>
         <Helmet>
            <meta name="description" content="This is comics page" />
            <title>Comics page</title>
         </Helmet>
         <AppBanner />
         <ErrorBoundary>
            <ComicsList />
         </ErrorBoundary>

      </>
   )
}

export default ComicsPage;