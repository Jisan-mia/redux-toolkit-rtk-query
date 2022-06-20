import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/featues/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()


  return (
    <div className='flex flex-col gap-7 mt-8 items-center justify-center'>
      <h1 className='text-2xl'>Counter App</h1>
      <div className='flex gap-4 items-center'>
        <button onClick={() => {
          dispatch(increment())
        }} className='rounded-sm border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-3xl py-2 px-4 flex items-center justify-center' >+</button>
        <span className='text-2xl'>{count}</span>
        <button onClick={() => {
          dispatch(decrement(4))
        }} className='rounded-sm border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-3xl py-2 px-4 flex items-center justify-center'>-</button>
      </div>  
    </div>
  )
}

export default Counter