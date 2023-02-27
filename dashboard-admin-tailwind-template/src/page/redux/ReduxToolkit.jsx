import React from 'react'
import CreatePost from './components/createPost/CreatePost'
import PostList from './components/postList/PostList'

const ReduxToolkit = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
       <a
        href="https://github.com/hiep1997xz/redux-tool-example"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
      <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
    </div>
  )
}

export default ReduxToolkit