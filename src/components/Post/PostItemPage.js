import React, { useState } from 'react'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

import {useSelector, useDispatch} from 'react-redux'
import { deletePost, selectPostById } from '../../redux/featues/post/postSlice'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Spinner from '../ui/Spinner'

const PostItemPage = ({}) => {
  // retrieve post id
  const { postId } = useParams()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  
  const dispatch = useDispatch()


  const post = useSelector((state) =>  selectPostById(state, Number(postId)))

  if(!post) {
    return <h2>Post Not Found!</h2>
  }



  const handleDeletePost = async () => {
    try{
      setIsLoading(true)
      await dispatch(deletePost(post)).unwrap()
      navigate('/')
    } catch(e) {
      console.error(e)
    } finally{
      setIsLoading(false)
    }
  }

  return (
    <div className='grid gap-3 items-start'>
      <div className='border-none outline-none flex justify-between items-center'>
        <button className='underline'>
          <Link to={'/'}>
            Go Back
          </Link>
        </button>
        <button className='underline'>
            Edit Post
        </button>
      </div>
      <div className='border border-[#dedede] p-4 rounded-lg flex flex-col gap-1'>
        <h1 className='text-slate-800 text-xl font-semibold'>{post.title}</h1>
        <p className='text-slate-700 font-normal text-sm'>
          {post.body}
        </p>
        <div className='flex gap-3 items-center'>
          <PostAuthor post={post} />
          <TimeAgo timeStamp={post.createdAt} />
        </div>
        <div className='flex items-center justify-between w-full'>
        <ReactionButtons post={post} />
        <button title='Delete Post' onClick={handleDeletePost}>
          {isLoading ? <Spinner /> : '✖️'}
        </button>
      </div>
      </div>
    </div>
  )
}

export default PostItemPage