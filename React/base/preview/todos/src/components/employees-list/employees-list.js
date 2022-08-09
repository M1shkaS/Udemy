import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';
// { data, onDelete, onToggleIncrease, onToggleRise }
const EmployeesList = ({ data, onDelete, onToggleProp }) => {

   const elements = data.map(item => {
      const { id, ...itemProps } = item;
      return (
         // spread, разворачиваем
         // Эти ключи должны быть уникальны только среди соседей, но не глобально 
         <EmployeesListItem
            key={id}
            {...itemProps}
            //property drill
            onDelete={() => onDelete(id)}
            // onDelete={(id) => console.log(id)}
            // currentTarget, невелируем всплытие событий
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}

         // onToggleIncrease={() => onToggleIncrease(id)}
         // onToggleRise={() => onToggleRise(id)}
         />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeesList

