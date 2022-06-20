import { createSlice, nanoid } from "@reduxjs/toolkit"
import {sub} from 'date-fns'

const initialState = [
  {
    id: 1,
    title: 'This is the demo title of post',
    content: 'This is the details content of post. lorem impsume lorem ipsum caret dollar',
    createdAt: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: 2,
    title: 'This is the demo title of post 2',
    content: 'This is the details content of post 2. lorem impsume lorem ipsum caret dollar',
    createdAt: sub(new Date(), {minutes: 8}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
]

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, {payload}) {
        state.push(payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            createdAt: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      },
      reactToPost: (state, action) => {
        const {postId, reaction} = action.payload;
        const findPost = state.find(post => post.id == postId);
        if(findPost) {
          findPost.reactions[reaction]++
        }
      }
    }
  }
})

export const selectAllPost = (state) => state.posts;

export const { addPost, reactToPost } = postSlice.actions

export default postSlice.reducer;