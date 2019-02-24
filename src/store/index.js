import { configureStore } from 'redux-starter-kit'
import userReducer from './userSlice'
import repoReducer from './repoSlice'
import selectRepoReducer from './selectRepoSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    selectedRepo: selectRepoReducer,
    repo: repoReducer
  }
})

export default store
