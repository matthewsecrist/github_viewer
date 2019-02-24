import { createAction, createReducer } from 'redux-starter-kit'
import { fetchRepo } from './repoSlice'

export const repoSelect = createAction('SelectRepo/select')

export const selectRepo = repo => dispatch => {
  dispatch(repoSelect(repo))
  let issuesUrl = repo.full_name

  console.log(issuesUrl)
  dispatch(fetchRepo(issuesUrl))
}

const initialState = {}

const selectRepoReducer = createReducer(initialState, {
  [repoSelect]: (state, { payload }) => payload
})

export default selectRepoReducer
