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
            { name: 'Misha', salary: 2000, increase: true, rise: false, id: 1 },
            { name: 'Andre', salary: 1000, increase: false, rise: true, id: 2 },
            { name: 'Valli', salary: 5000, increase: true, rise: false, id: 3 },
            { name: 'Dima', salary: 15000, increase: false, rise: false, id: 4 },
         ],
         term: '',
         filter: 'all'
         // Моё
         // filterName: 'all-employees'
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
         rise: false,
         id: this.dataLength++
      };

      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return { data: newArr }
      })
   }

   // onToggleIncrease = (id) => {
   //    //Самый сложный способ
   //    // this.setState(({ data }) => {
   //    //    const index = data.findIndex(item => item.id == id);
   //    //    const old = data[index];
   //    //    const newItem = { ...old, increase: !old.increase };
   //    //    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
   //    //    return { data: newArr }
   //    // })

   //    //Попроще способ
   //    this.setState(({ data }) => ({
   //       data: data.map(item => {
   //          if (item.id == id) {
   //             return { ...item, increase: !item.increase };
   //          }
   //          return item;
   //       })
   //    }))
   // }

   // onToggleRise = (id) => {
   //    this.setState(({ data }) => ({
   //       data: data.map(item => {
   //          if (item.id == id) {
   //             return { ...item, rise: !item.rise };
   //          }
   //          return item;
   //       })
   //    }))
   // }
   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id == id) {
               return { ...item, [prop]: !item[prop] };
            }
            return item;
         })
      }))
   }

   searchEmp = (items, term) => {
      if (term.length == 0) return items;

      return items.filter(elem => {
         return elem.name.indexOf(term) > -1;
      })
   }

   onUpdateSearch = (term) => {
      this.setState({ term });
   }


   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
            return items.filter(item => item.rise);
         case 'moreThen1000':
            return items.filter(item => item.salary > 1000);
         default:
            return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({ filter });
   }


   // Моё
   // filterEmp = (items, filterName) => {
   //    if (filterName == 'all-employees') return items;

   //    if (filterName == 'promotion') {
   //       return items.filter(item => item.rise)
   //    }

   //    if (filterName == 'salary') {
   //       return items.filter(item => item.salary > 1000)
   //    }
   // }

   // onUpdateFilter = (filterName) => {
   //    this.setState({ filterName });
   // }


   render() {
      const { data, term, filterName, filter } = this.state;
      const quantityEmployees = data.length;

      // Моё
      // const filterEmp = this.filterEmp(data, filterName)
      // const visibleData = this.searchEmp(filterEmp, term);

      const visibleData = this.filterPost(this.searchEmp(data, term), filter);
      return (
         <div className="app">
            <AppInfo quantityEmployees={quantityEmployees} data={data} />
            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
               {/* Моё */}
               {/* <AppFilter onUpdateFilter={this.onUpdateFilter} /> */}
            </div>
            <EmployeesList data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
            // onToggleIncrease={this.onToggleIncrease}
            // onToggleRise={this.onToggleRise}
            />
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