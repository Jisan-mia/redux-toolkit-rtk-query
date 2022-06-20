import React from 'react'
import PostAuthor from './PostAuthor'

const PostItem = ({post}) => {
  return (
    <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1'>
      <h1 className='text-slate-800 text-xl font-semibold'>{post.title}</h1>
      <p className='text-slate-700 font-normal text-sm'>
        {post.content}
      </p>
      <PostAuthor post={post} />
    </div>
  )
}

export default PostItem