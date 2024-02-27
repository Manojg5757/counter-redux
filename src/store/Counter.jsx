import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset,incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
    const [amount,setAmount] = useState(0)
  return (
    <div className='flex flex-col gap-5 h-[100vh] items-center justify-center'>
        <h1>{count}</h1>
        <div className='flex  gap-3'>
        <button className=' border border-black-300 px-2 bg-slate-900 text-white' onClick={()=>dispatch(increase())}>+</button>
        <button className='border border-black-300 px-2 bg-slate-900 text-white' onClick={()=>dispatch(decrease())}>-</button>
        </div>
        <input className='border border-black-700' type="number" onChange={(e)=>setAmount(parseInt(e.target.value))} />
        <div className='flex gap-5'>
        <button className='border border-black-300 p-1 bg-slate-900 text-white' onClick={()=>dispatch(incrementByAmount(amount))}>ByAmount</button>
        <button className='border border-black-300 p-1 bg-slate-900 text-white' onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </div>
  )
}

export default Counter