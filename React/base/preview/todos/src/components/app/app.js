// В названии папок используем кебапкейс
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {
   const data = [
      { name: 'Misha', salary: 2000, increase: true, id: 1 },
      { name: 'Andre', salary: 1000, increase: false, id: 2 },
      { name: 'Valli', salary: 5000, increase: true, id: 3 },
      { name: 'Dima', salary: 15000, increase: false, id: 4 },
   ];

   return (
      <div className="app">
         <AppInfo />
         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>
         <EmployeesList data={data} />
         <EmployeesAddForm />
      </div>
   )
}

export default App;