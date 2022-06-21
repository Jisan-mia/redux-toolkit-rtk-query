import React from 'react'
import { Outlet } from 'react-router-dom'
import AddPost from '../Post/AddPost'
import PostComp from '../Post/PostCom'

const Layout = () => {
  return (
    <main>
      <div className='max-w-4xl py-3 px-5 grid gap-8 grid-cols-5 justify-center w-full m-auto mt-5'>
        <div className='col-start-1 col-end-3'>
          <AddPost />
        </div>
        <div className='col-start-3 col-end-6 overflow-y-auto max-h-[calc(100vh-50px)]'>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Layout