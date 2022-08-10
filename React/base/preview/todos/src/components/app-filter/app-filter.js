// import { Component } from 'react'

import './app-filter.css'

const AppFilter = (props) => {
   const buttonsData = [
      { name: 'all', label: 'Все сотрудники' },
      { name: 'rise', label: 'На повышение' },
      { name: 'moreThen1000', label: 'З/П больше 1000$' },
   ];

   const buttons = buttonsData.map(({ name, label }) => {
      const active = props.filter === name;
      // Лучше использовать вот так, чем в классе что-то там мутить
      const clazz = active ? 'btn-light' : 'btn-outline-light';
      return (
         <button
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {label}
         </button>
      )
   })


   return (
      <div className="btn-group">
         {buttons}
         {/* <button
            onClick={this.onUpdateFilter}
            data-toggle='promotion'
            className="btn btn-outline-light"
            type="button">
            На повышение
         </button>
         <button
            onClick={this.onUpdateFilter}
            data-toggle='salary'
            className="btn btn-outline-light"
            type="button">
            З/П больше 1000$
         </button> */}
      </div>
   )
}

export default AppFilter;



//Моё
// class AppFilter extends Component {
//    constructor(props) {
//       super(props)
//    }
//    onUpdateFilter = (e) => {
//       this.props.onUpdateFilter(e.currentTarget.getAttribute('data-toggle'))
//    }

//    render() {
//       return (
//          <div className="btn-group">
//             <button
//                onClick={this.onUpdateFilter}
//                data-toggle='all-employees'
//                className="btn btn-light"
//                type="button">
//                Все сотрудники
//             </button>
//             <button
//                onClick={this.onUpdateFilter}
//                data-toggle='promotion'
//                className="btn btn-outline-light"
//                type="button">
//                На повышение
//             </button>
//             <button
//                onClick={this.onUpdateFilter}
//                data-toggle='salary'
//                className="btn btn-outline-light"
//                type="button">
//                З/П больше 1000$
//             </button>
//          </div>
//       )
//    }
// }