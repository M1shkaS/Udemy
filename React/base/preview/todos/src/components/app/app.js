import { Component } from 'react'

// В названии папок используем кебапкейс
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
   constructor(props) {
      super(props);
      // state напрямую нельзя менять
      //state иммутабельный
      this.state = {
         data: [
            { name: 'Misha', salary: 2000, increase: true, id: 1 },
            { name: 'Andre', salary: 1000, increase: false, id: 2 },
            { name: 'Valli', salary: 5000, increase: true, id: 3 },
            { name: 'Dima', salary: 15000, increase: false, id: 4 },
         ]
      }
      this.dataLength = 5;
   }
   //Иммутабельность
   //Обьект называется иммутабельным тогда, когда он не может быть изменён после своего создания
   deleteItem = (id) => {
      this.setState(({ data }) => {
         // const index = data.findIndex(elem => elem.id === id);

         // Первый способ (!НЕПРАВИЛЬНЫЙ)
         // data.splice(index, 1)
         // return { data }

         //Второй способ правильный, но такой себе
         // const before = data.slice(0, index);
         // const after = data.slice(index + 1);
         // const newArr = [...before, ...after]
         // return { data: newArr }

         //3 способ самый чёткий
         return {
            data: data.filter(item => item.id != id)
         }
      })
   }

   addItem = (item) => {

      const newItem = {
         name: item.name,
         salary: item.salary,
         increase: false,
         id: this.dataLength++
      };

      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return { data: newArr }
      })
   }



   render() {
      const { data } = this.state;

      return (
         <div className="app">
            <AppInfo />
            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>
            <EmployeesList data={data} onDelete={this.deleteItem} />
            <EmployeesAddForm onAdd={this.addItem} />
         </div>
      )
   }
}
// function App() {
//    const data = [
//       { name: 'Misha', salary: 2000, increase: true, id: 1 },
//       { name: 'Andre', salary: 1000, increase: false, id: 2 },
//       { name: 'Valli', salary: 5000, increase: true, id: 3 },
//       { name: 'Dima', salary: 15000, increase: false, id: 4 },
//    ];

//    return (
//       <div className="app">
//          <AppInfo />
//          <div className="search-panel">
//             <SearchPanel />
//             <AppFilter />
//          </div>
//          <EmployeesList data={data} onDelete={(idx) => console.log(idx)} />
//          <EmployeesAddForm />
//       </div>
//    )
// }

export default App;