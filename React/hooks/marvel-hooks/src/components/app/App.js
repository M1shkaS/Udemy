import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const App = () => {

   const [selectedChar, setSelectedChar] = useState(null);
   const [deleteList, setDeleteList] = useState(false);

   const onCharSelected = (id) => {
      setSelectedChar(id);
   }
   const deleteListChar = () => {
      setDeleteList(deleteList => !deleteList)
   }

   return (
      <div className="app">
         <button onClick={deleteListChar}>Delete</button>
         <AppHeader />
         <main>
            <ErrorBoundary>
               <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
               <ErrorBoundary>
                  {deleteList ? null : <CharList onCharSelected={onCharSelected} />}

               </ErrorBoundary>
               <ErrorBoundary>
                  <CharInfo charId={selectedChar} />
               </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
         </main>
      </div>
   )
}

export default App;