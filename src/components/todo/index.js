import React, { useState } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from '../../redux/api/apiSlice'
import Spinner from '../ui/Spinner'

const TodoApp = () => {
  const [todoText, setTodoText] = useState('')

  const {data: todos, isLoading, isSuccess, isError, error} = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();



  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({userId: 1, title: todoText, isCompleted: false})
    setTodoText('')
    
  }


  const addTodoContent = (
    <form className='flex items-end gap-2 justify-between w-full mb-3' onSubmit={handleAddTodo}>
        <div className='basis-full'>
          <label htmlFor="title" className='text-lg font-medium'>
            Enter a New Todo
          </label>
          <input
          placeholder='Your todo' value={todoText} onChange={e => setTodoText(e.target.value)} type="text" className='w-full border border-[#dedede] outline-none focus:ring-4 focus-within:ring-blue-300 text-base rounded-md p-2 mt-2'/>
        </div>
        
        <input  type="submit" value="Submit" className=' cursor-pointer rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-base py-[9px] px-7 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'/>
      
      </form>
  )

  let content;
  if(isLoading) {
    content = <Spinner />
  } else if(isSuccess) {
    content = todos.map(todo => (
      <article key={todo.id} className="flex items-center justify-between gap-3">
        <div >
          <input 
          checked={todo.isCompleted}
          onChange={() => updateTodo({...todo, isCompleted: !todo.isCompleted})}
          type="checkbox" name={todo.id} id={todo.id} />
          <label htmlFor={todo.id}>
            {todo.title}
          </label>
        </div>
        <button
          onClick={() => {
            deleteTodo({id: todo.id})
          }}
          className='cursor-pointer rounded-md border-none outline-none focus:ring-2 focus:ring-blue-300 bg-blue-700 text-white font-medium text-sm py-1 px-7 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Delete
        </button>
      </article>
    ))
  } else if(isError) {
    content = <p>{error}</p>
  }

  return (
    <div className='max-w-[600px]  w-full m-auto p-3'>
      {addTodoContent}
     
      <div className="grid gap-3">
      {content} 
      </div>
    </div>  
  )
}

export default TodoApp