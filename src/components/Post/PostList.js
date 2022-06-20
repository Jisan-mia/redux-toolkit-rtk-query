import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from '../../redux/featues/post/postSlice'
import PostItem from './PostItem';

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPost  = posts.slice().sort((a,b) => b.createdAt.localeCompare(a.data))


  return (
    <React.Fragment>
      <h1 className='text-2xl font-bold pb-3'>All Posts</h1>
      <div className='grid gap-3'>
        {orderedPost.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default PostList