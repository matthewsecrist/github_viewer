import { createAction, createReducer } from 'redux-starter-kit'

export const fetchRepoRequest = createAction('Repo/request')
export const fetchRepoSuccess = createAction('Repo/success')
export const fetchRepoFailure = createAction('Repo/failure')

export const fetchRepo = repo => async dispatch => {
  const issuesUrl = `https://api.github.com/repos/${repo}/issues`
  dispatch(fetchRepoRequest)

  try {
    const result = await fetch(issuesUrl).then(response => response.json())

    return dispatch(fetchRepoSuccess(result))
  } catch (err) {
    return dispatch(fetchRepoFailure(err.message))
  }
}

const initialState = {
  isFetching: false,
  details: [],
  error: null
}

const repoReducer = createReducer(initialState, {
  [fetchRepoRequest]: state => {
    state.isFetching = true
  },
  [fetchRepoSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.details = payload
  },
  [fetchRepoFailure]: (state, { payload }) => {
    state.isFetching = false
    state.error = payload
  }
})

export default repoReducer
