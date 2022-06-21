import React from 'react'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import {Link} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { deletePost } from '../../redux/featues/post/postSlice'

const PostItem = ({post}) => {
  const dispatch = useDispatch()

  const handleDeletePost = () => {
    try{
      dispatch(deletePost(post))
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1  items-start'>
     
      <h1 className='text-slate-800 text-xl font-semibold cursor-pointer hover:text-blue-700'>
        <Link to={`post/${post.id}`}>
          {post.title}
        </Link>
      </h1>
      <p className='text-slate-700 font-normal text-sm'>
        {post.body.substring(0, 75)}...
      </p>
      <div className='flex gap-3 items-center'>
        <PostAuthor post={post} />
        <TimeAgo timeStamp={post.createdAt} />
      </div>
      <div className='flex items-center justify-between w-full'>
        <ReactionButtons post={post} />
        <button title='Delete Post' onClick={handleDeletePost}>
          ✖️
        </button>
      </div>
    </div>
  )
}

export default PostItem