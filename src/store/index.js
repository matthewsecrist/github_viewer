import { configureStore } from 'redux-starter-kit'
import userReducer from './userSlice'
import issuesReducer from './issuesSlice'
import repoReducer from './repoSlice'
import issueLabelsReducer from './issueLabelsSlice'
import filterReducer from './filterSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    repo: repoReducer,
    issues: issuesReducer,
    labels: issueLabelsReducer,
    filter: filterReducer
  }
})

export default store
