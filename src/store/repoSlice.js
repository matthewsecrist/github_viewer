import { createAction, createReducer } from 'redux-starter-kit'
import { fetchIssues } from './issuesSlice'
import { fetchIssueLabels } from './issueLabelsSlice'

export const repoSelect = createAction('SelectRepo/select')

export const selectRepo = repo => dispatch => {
  dispatch(repoSelect(repo))
  dispatch(fetchIssues(repo.full_name))
  dispatch(fetchIssueLabels(repo.full_name))
}

const initialState = {}

const repoReducer = createReducer(initialState, {
  [repoSelect]: (state, { payload }) => payload
})

export default repoReducer
