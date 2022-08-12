import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';
// Чтобы использовать scss надо ставить пакет sass(раньше ставили node-sass, но он больше не поддерживается)
// Нужно аккуратно использовать переменные
// Если хотим использовать глобальный файлик с переменными variable.scss то его нужно каждый раз импортировать

// Можно не использовать коснутрктор
class EmployeesAddForm extends Component {

   state = {
      name: '',
      salary: ''
   }
   // constructor(props) {
   //    super(props);

   //    this.state = {
   //       name: '',
   //       salary: ''
   //    }
   // }

   onValueChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   addPerson = (e) => {
      e.preventDefault();

      const { name, salary } = this.state;

      if (name.length > 3 && salary) {
         this.props.onAdd({ name, salary });
         // ?
         this.setState({
            name: '',
            salary: ''
         })
      }



   }

   static onLog = () => {
      console.log('Static');
   }

   static logged = 'on'

   render() {

      const { name, salary } = this.state;
      // В данном случае конгтролируемый компонент(элемент) т.к есть value ={}. Оно контролируется реактом.Помгает для валидации и тд
      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form onSubmit={this.addPerson}
               className="add-form d-flex">
               {/* начинаем с on потому что это негласное правило , где у нас какое то действие связано с пользователем*/}
               <input onChange={this.onValueChange}
                  name='name'
                  value={name}
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?" />
               <input onChange={this.onValueChange}
                  name='salary'
                  value={salary}
                  type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?" />

               <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
            </form>
         </div>
      )
   }
}
// const EmployeesAddForm = () => {
//    return (
//       <div className="app-add-form">
//          <h3>Добавьте нового сотрудника</h3>
//          <form
//             className="add-form d-flex">
//             <input type="text"
//                className="form-control new-post-label"
//                placeholder="Как его зовут?" />
//             <input type="number"
//                className="form-control new-post-label"
//                placeholder="З/П в $?" />

//             <button type="submit"
//                className="btn btn-outline-light">Добавить</button>
//          </form>
//       </div>
//    )
// }

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;