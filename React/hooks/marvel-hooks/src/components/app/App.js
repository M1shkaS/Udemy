import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

// Загрузится только тогда, когда она будет на странице
const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/singleCharPage/SingleCharacterPage'));

// 669
const App = () => {
   return (
      <Router>
         <div className="app">
            <AppHeader />
            <main>
               <Suspense fallback={<Spinner />}>
                  <Routes>
                     <Route path='/' element={<MainPage />} />
                     <Route path='/comics' element={<ComicsPage />} />
                     <Route path='/comics/:id' element={<SinglePage dataType='comic' Component={SingleComicPage} />} />
                     <Route path='/characters/:id' element={<SinglePage dataType='character' Component={SingleCharacterPage} />} />
                     <Route path='*' element={<Page404 />} />
                  </Routes>
               </Suspense>
            </main>
         </div>
      </Router>
   )
}


export default App;

// Suspense fallback={} - запасной компонент, который можно показать пока грузится динамический  import. В него можно поместить как react component так и react element