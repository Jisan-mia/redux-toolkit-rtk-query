import React from 'react'
import {useDispatch} from 'react-redux'
import { reactToPost } from '../../redux/featues/post/postSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch();
  // console.log(post)

  const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      onClick={() => {
        dispatch(reactToPost({
          postId: post.id,
          reaction: name
        }))
      }}
      className='flex gap-[2px] items-center rounded-full border border-[#dedede] py-[2px] px-2'
    >
      <span>{emoji}</span> <span>{post.reactions[name]}</span>
    </button>
  ))


  return (
    <div className='flex items-center gap-2'>
      {reactionBtns}
    </div>
  )
}

export default ReactionButtons