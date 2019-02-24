import { configureStore } from 'redux-starter-kit'
import userReducer from './userSlice'
import issuesReducer from './issuesSlice'
import repoReducer from './repoSlice'
import issueLabelsReducer from './issueLabelsSlice'
import visibilityFilterReducer from './visibilityFilterSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    repo: repoReducer,
    issues: issuesReducer,
    labels: issueLabelsReducer,
    filter: visibilityFilterReducer
  }
})

export default store
