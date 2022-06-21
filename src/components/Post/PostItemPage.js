import React from 'react'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

import {useSelector} from 'react-redux'
import { selectPostById } from '../../redux/featues/post/postSlice'
import {useParams} from 'react-router-dom'

const PostItemPage = ({}) => {
  // retrieve post id
  const { postId } = useParams()


  const post = useSelector((state) =>  selectPostById(state, Number(postId)))

  if(!post) {
    return <h2>Post Not Found!</h2>
  }

  return (
    <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1'>
      <h1 className='text-slate-800 text-xl font-semibold'>{post.title}</h1>
      <p className='text-slate-700 font-normal text-sm'>
        {post.body}
      </p>
      <div className='flex gap-3 items-center'>
        <PostAuthor post={post} />
        <TimeAgo timeStamp={post.createdAt} />
      </div>
      <ReactionButtons post={post} />
    </div>
  )
}

export default PostItemPage