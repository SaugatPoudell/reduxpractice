import React from 'react';
import './App.css';
import { incNumber,decNumber } from './actions';
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const myState=useSelector((state)=> state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <>

    <div className="container">
    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    <div className="quantity">
      <button type='button' onClick={()=>dispatch(decNumber())}>-</button>
    <input name="quantity" type="text" className="quantity_input" value={myState}/>
    <button type='button' onClick={()=>dispatch(incNumber())}>+</button>
    </div>
    </div>
    </>
  );
}

export default App;
