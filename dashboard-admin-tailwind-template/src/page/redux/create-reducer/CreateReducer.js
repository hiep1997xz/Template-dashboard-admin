import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from '../constants/blog'

const initialState = {
  postList: initalPostList,
  editingPost: null,
}

export const addPost = createAction('blog/addPost')
export const deletePost = createAction('blog/deletePost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex(
        (post) => post.id === postId
      )
      if (foundPostIndex !== -1) {
        state.postList.slice(foundPostIndex, 1)
      }
    })
})

export default blogReducer
