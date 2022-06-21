import React from 'react'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import {Link} from 'react-router-dom'

const PostItem = ({post}) => {
  return (
    <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1'>
      
      <Link to={`post/${post.id}`}>
        <h1 className='text-slate-800 text-xl font-semibold cursor-pointer hover:text-blue-700'>{post.title}</h1>
      </Link>
      <p className='text-slate-700 font-normal text-sm'>
        {post.body.substring(0, 75)}...
      </p>
      <div className='flex gap-3 items-center'>
        <PostAuthor post={post} />
        <TimeAgo timeStamp={post.createdAt} />
      </div>
      <ReactionButtons post={post} />
    </div>
  )
}

export default PostItem