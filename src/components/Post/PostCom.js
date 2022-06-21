import React from 'react'
import AddPost from './AddPost'
import PostList from './PostList'


const PostComp = () => {
  return (
    <div className='max-w-4xl py-3 px-5 grid gap-8 grid-cols-5 justify-center w-full m-auto mt-5'>
      <div className='col-start-1 col-end-3'>
        <AddPost />
      </div>
      <div className='col-start-3 col-end-6 overflow-y-auto max-h-[calc(100vh-50px)]'>
        <PostList />
      </div>
    </div>
  )
}

export default PostComp