import './app-info.css';

const AppInfo = ({ quantityEmployees, data }) => {
   //Говнокод
   // let counter = 0;
   // data.forEach(element => {
   //    if (element.increase) counter++
   // });

   //Норм
   let counter = data.filter(item => item.increase).length
   return (
      <div className="app-info">
         <h1>Учёт сотрудников в компании M1shka</h1>
         <h2>Общее число сотрудников: {quantityEmployees} </h2>
         <h2>Премию получат: {counter} </h2>
      </div>
   )
}

export default AppInfo;