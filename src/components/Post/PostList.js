import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPost, getPostsStatus, getPostsError, fetchPosts } from '../../redux/featues/post/postSlice'
import PostItem from './PostItem';

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if(postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])
  
  let content;
  if(postsStatus === 'loading') {
    content =  <p>Loading...</p>
  } else if(postsStatus == 'failed') {
    content =  <p>{error}</p>
  } else {
    const orderedPost  = posts.slice().sort((a,b) => b.createdAt.localeCompare(a.data))
    content = <div className='grid gap-3'>
                {orderedPost.map((post, idx) => (
                  <PostItem key={idx} post={post} />
                ))}
            </div>
  }
  
  return (
    <React.Fragment>
      <h1 className='text-2xl font-bold pb-3 flex items-center justify-between'>All Posts
        <small className='mr-2 text-base font-normal'>Total: {posts.length}</small>
      </h1>
      {content}
    </React.Fragment>
  )
}

export default PostList