import { configureStore } from 'redux-starter-kit'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store
