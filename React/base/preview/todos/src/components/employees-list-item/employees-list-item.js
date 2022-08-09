
import './employees-list-item.css';

const EmployeesListItem = (props) => {

   const { name, salary, onDelete, onToggleProp, increase, rise } = props;
   // const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;

   let className = 'list-group-item d-flex justify-content-between';

   if (increase) {
      className += ' increase';
   }

   if (rise) {
      className += ' like'
   }
   return (
      <li className={className} >
         <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
         <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
         <div className='d-flex justify-content-center align-items-center'>
            <button onClick={onToggleProp} type="button"
               className="btn-cookie btn-sm  " data-toggle="increase">
               <i className="fas fa-cookie"></i>
            </button>

            <button onClick={onDelete} type="button"
               className="btn-trash btn-sm ">
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li >
   )
}


export default EmployeesListItem;


// class EmployeesListItem extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          increase: false,
//          className: 'list-group-item d-flex justify-content-between'
//       }
//    }

//    onIncrease = () => {
//       this.setState(({ increase }) => ({
//          increase: !increase
//       }))
//    }

//    onLikes = () => {
//       if (this.state.className.match(/like/g)) {
//          this.setState(({ className }) => ({
//             className: className.replace(' like', '')
//          }))
//       } else {
//          this.setState(({ className }) => ({
//             className: className + ' like'
//          }))
//       }

//    }

//    render() {
//       const { name, salary, onDelete, onToggleIncrease, onToggleRise } = this.props;

//       let { increase, className } = this.state;

//       if (increase) {
//          className += ' increase';
//       }
//       return (
//          <li className={className} >
//             <span onClick={this.onLikes} className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
//             <div className='d-flex justify-content-center align-items-center'>
//                <button onClick={this.onIncrease} type="button"
//                   className="btn-cookie btn-sm ">
//                   <i className="fas fa-cookie"></i>
//                </button>

//                <button onClick={onDelete} type="button"
//                   className="btn-trash btn-sm ">
//                   <i className="fas fa-trash"></i>
//                </button>
//                <i className="fas fa-star"></i>
//             </div>
//          </li>
//       )
//    }
// }



// const EmployeesListItem = ({ name, salary, increase }) => {
//    return (
//       <li className={"list-group-item d-flex justify-content-between " + (increase ? "increase" : '')}>
//          <span className="list-group-item-label">{name}</span>
//          <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
//          <div className='d-flex justify-content-center align-items-center'>
//             <button type="button"
//                className="btn-cookie btn-sm ">
//                <i className="fas fa-cookie"></i>
//             </button>

//             <button type="button"
//                className="btn-trash btn-sm ">
//                <i className="fas fa-trash"></i>
//             </button>
//             <i className="fas fa-star"></i>
//          </div>
//       </li>
//    )
// }
