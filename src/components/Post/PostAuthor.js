import React from 'react'
import { useSelector } from 'react-redux'  
import { selectAllUsers } from '../../redux/featues/users/usersSlice'

const PostAuthor = ({post}) => {
  const users = useSelector(selectAllUsers)

  const author = users.find(user => user.id == post.userId)

  return (
    <div>
      By {author ? author.name : 'Unknown author'}
    </div>
  )
}

export default PostAuthor