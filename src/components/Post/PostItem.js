import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostItem = ({post}) => {
  return (
    <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1'>
      <h1 className='text-slate-800 text-xl font-semibold'>{post.title}</h1>
      <p className='text-slate-700 font-normal text-sm'>
        {post.content}
      </p>
      <div className='flex gap-3 items-center'>
        <PostAuthor post={post} />
        <TimeAgo timeStamp={post.createdAt} />
      </div>
    </div>
  )
}

export default PostItem