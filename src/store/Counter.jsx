import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset,incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
    const [amount,setAmount] = useState(0)
  return (
    <div className='flex items-center justify-center'>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increase())}>+</button>
        <button onClick={()=>dispatch(decrease())}>-</button>
        <input type="number" onChange={(e)=>setAmount(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(incrementByAmount(amount))}>ByAmount</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter