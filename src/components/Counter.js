import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/featues/counter/counterSlice'

const Counter = () => {
  const [countInput, setCountInput] = useState(0)
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()


  return (
    <div className='flex flex-col gap-7 mt-8 items-center justify-center'>
      <h1 className='text-2xl'>Counter App</h1>
      <div className='flex gap-4 items-center'>
        <button onClick={() => {
          dispatch(increment())
        }} className='rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-3xl py-2 px-4 flex items-center justify-center' >+</button>
        <span className='text-2xl'>{count}</span>
        <button onClick={() => {
          dispatch(decrement(4))
        }} className='rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-3xl py-2 px-4 flex items-center justify-center'>-</button>
      </div>
      <input className='border border-gray-400 outline-none focus:ring-4 focus-within:ring-blue-300 text-xl rounded-md p-1' type="number" value={countInput} onChange={(e) => {
        setCountInput(e.target.valueAsNumber)
      }} />  
     <div className='flex gap-2'>
        <button
          onClick={() => {
            dispatch(incrementByAmount(countInput))
            setCountInput(0)

          }}
          className='rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-xl py-2 px-7 block flex items-center justify-center'
        >Add</button>
        <button
          onClick={() => {
            dispatch(reset())
          }}
          className='rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-xl py-2 px-7 block flex items-center justify-center'
        >Reset</button>
     </div>
    </div>
  )
}

export default Counter