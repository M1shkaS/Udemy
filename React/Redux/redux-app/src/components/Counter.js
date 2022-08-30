import { connect, useSelector, useDispatch } from "react-redux";
// import * as actions from '../actions';
import { inc, dec, rnd } from '../actions';
import { bindActionCreators } from "redux";

// const Counter = ({ counter, inc, dec, rnd }) => {
//    return (
//       <div className="jumbotron">
//          <h1 >{counter}</h1>
//          <div onClick={dec} className="btn btn-primary">dec</div>
//          <div onClick={inc} className="btn btn-primary">inc</div>
//          <div onClick={rnd} className="btn btn-primary">rnd</div>
//       </div>
//    )
// }

// // Должна быть чистой и синхронной
// const mapStateToProps = (state) => ({ counter: state.value });

// // const mapDispatchToProps = (dispatch) => {
// //    const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// //    return {
// //       inc,
// //       dec,
// //       rnd
// //    }
// // }

// export default connect(mapStateToProps, actions)(Counter);

const Counter = () => {

   const counter = useSelector(state => state.value);
   const dispatch = useDispatch();
   return (
      <div className="jumbotron">
         <h1 >{counter}</h1>
         <div onClick={() => dispatch(dec())} className="btn btn-primary">dec</div>
         <div onClick={() => dispatch(inc())} className="btn btn-primary">inc</div>
         <div onClick={() => dispatch(rnd())} className="btn btn-primary">rnd</div>
      </div>
   )
}

export default Counter 