import React from 'react'

const AddPost = () => {
  return (
    <div>
      <form className='flex flex-col justify-center gap-3'>

        <div className='flex flex-col gap-2'>
          <label htmlFor="title">
            Title
          </label>
          <input type="text" className='border border-gray-400 outline-none focus:ring-4 focus-within:ring-blue-300 text-xl rounded-md p-1'/>
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" className='h-28 border border-gray-400 outline-none focus:ring-4 focus-within:ring-blue-300 text-xl rounded-md p-1' />
        </div>
        
        <input type="submit" value="Submit" className='rounded-md border-none outline-none focus:ring-4 focus:ring-blue-300 bg-blue-700 text-white font-bold text-lg py-2 px-7 block flex items-center justify-center'/>
      </form>
    </div>
  )
}

export default AddPost