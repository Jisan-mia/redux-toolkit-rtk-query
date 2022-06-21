import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        <Link to={'/counter'}> Counter App</Link>
        <Link to={'/blog'}> Blog App</Link>
      </h1>
    </div>
  )
}

export default Home