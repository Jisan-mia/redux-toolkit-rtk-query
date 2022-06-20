import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/featues/post/postSlice';
import {nanoid} from '@reduxjs/toolkit'

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const dispatch = useDispatch()


  const handleAddPOst = (e) => {
    e.preventDefault();
    console.log(formData)
    if(formData.title && formData.content) {
      dispatch(addPost({
        ...formData,
        id: nanoid()
      }))
    }
    setFormData({
      title: '',
      content: ''
    })
  }



  return (
    <div>
      <form className='flex flex-col justify-center gap-3' onSubmit={handleAddPOst}>

        <div className='flex flex-col gap-2'>
          <label htmlFor="title">
            Title
          </label>
          <input placeholder='Post title' value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type="text" className='border border-gray-400 outline-none focus:ring-4 focus-within:ring-blue-300 text-xl rounded-md p-1'/>
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="content">Content</label>
          <textarea placeholder='Post content' value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} name="content" id="content" className='h-28 border border-gray-400 outline-none focus:ring-4 focus-within:ring-blue-300 text-xl rounded-md p-1' />
        </div>
        
        <input type="submit" value="Submit" className='cursor-pointer rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-lg py-2 px-7 block flex items-center justify-center'/>
      </form>
    </div>
  )
}

export default AddPost