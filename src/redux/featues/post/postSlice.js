import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit"
import {sub} from 'date-fns'
import axios from 'axios'

// const initialState = [
//   {
//     id: 1,
//     title: 'This is the demo title of post',
//     content: 'This is the details content of post. lorem impsume lorem ipsum caret dollar',
//     createdAt: sub(new Date(), {minutes: 10}).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0
//     }
//   },
//   {
//     id: 2,
//     title: 'This is the demo title of post 2',
//     content: 'This is the details content of post 2. lorem impsume lorem ipsum caret dollar',
//     createdAt: sub(new Date(), {minutes: 8}).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0
//     }
//   }
// ]

const POST_API = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try{
    const response = await axios.get(POST_API)
    return [...response.data]
  } catch(e) {
    return e.message
  }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  try{
    const response = await axios.post(POST_API, initialPost)
    return response.data
  } catch(e) {
    return e.message
  }
})


export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
  const {id} = initialPost
  try{
    const response = await axios.put(`${POST_API}/${id}`, initialPost)
    return response.data
  } catch(e) {
    return e.message
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async(initialPost) => {
  const {id} = initialPost;
  try{
    const res = await axios.delete(`${POST_API}/${id}`)
    if(res?.status === 200) return initialPost;
    return `${res?.status}: ${res.statusText}`
  } catch(e) {
    return e.message 
  }
}) 


const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeed' | 'failed'
  error: null
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, {payload}) {
        state.posts.push(payload)
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
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
      
    },
    reactToPost: (state, action) => {
      // console.log(action.payload)
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
          existingPost.reactions[reaction]++
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeed';
        // adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map(post => {
          post.createdAt = sub(new Date(), {minutes: min++}).toISOString()
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post
        })
        // console.log(loadedPosts)

        // add any fetched post to the array
        state.posts = loadedPosts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId)
        action.payload.createdAt = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }
        console.log(action.payload)
        state.posts.push(action.payload)

      })

      .addCase(updatePost.fulfilled, (state, action) => {
        if(!action.payload?.id) {
          console.log('update could not complete', action.payload)
          return
        }
        const {id} = action.payload;
        action.payload.createdAt = new Date().toISOString()
        const posts = state.posts.filter(post => post.id != id)
        state.posts = [...posts, action.payload]
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        if(!action.payload?.id) {
          console.log('delete could not complete', action.payload)
          return
        }
        const {id} = action.payload;
        state.posts = state.posts.filter(post => post.id !== id)
      })
  }
})

export const selectAllPost = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) => 
  state.posts.posts.find(post => post.id == postId)

export const { addPost, reactToPost } = postSlice.actions

export default postSlice.reducer;