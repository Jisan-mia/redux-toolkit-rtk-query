import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../redux/featues/post/postSlice';
import { selectAllUsers } from '../../redux/featues/users/usersSlice';

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const dispatch = useDispatch()
  const [selectedUserId, setSelectedUserId] = useState('')
 
  const users = useSelector(selectAllUsers)

  const canSubmit = formData.title && formData.content && selectedUserId

  const handleAddPOst = (e) => {
    e.preventDefault();
    if(canSubmit) {
      dispatch(addPost(formData.title, formData.content, selectedUserId))
    } else {
      alert('Please fill all the field')
    }
    setFormData({
      title: '',
      content: '',
    })
    setSelectedUserId('')
  }
  
  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <div>
      <form className='flex flex-col justify-center gap-3' onSubmit={handleAddPOst}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="title">
            Select User
          </label>
          <select className='border border-[#dedede] rounded-md outline-none p-1 focus:ring-4 focus-within:ring-blue-300 ' name="user" id="user" value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value) }>
            <option value="" selected disabled>Users</option>
            {userOptions}
          </select>
        </div>

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
        
        <input disabled={!canSubmit} type="submit" value="Submit" className='cursor-pointer rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-lg py-2 px-7 block flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'/>
      </form>
    </div>
  )
}

export default AddPost