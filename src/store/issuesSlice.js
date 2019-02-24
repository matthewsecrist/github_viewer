import { createAction, createReducer } from 'redux-starter-kit'

export const fetchIssuesRequest = createAction('Repo/request')
export const fetchIssuesSuccess = createAction('Repo/success')
export const fetchIssuesFailure = createAction('Repo/failure')

export const fetchIssues = repo => async dispatch => {
  const issuesUrl = `https://api.github.com/repos/${repo}/issues`
  dispatch(fetchIssuesRequest)
  try {
    const result = await fetch(issuesUrl).then(response => response.json())

    return dispatch(fetchIssuesSuccess(result))
  } catch (err) {
    return dispatch(fetchIssuesFailure(err.message))
  }
}

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

const issuesReducer = createReducer(initialState, {
  [fetchIssuesRequest]: state => {
    state.isFetching = true
  },
  [fetchIssuesSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.data = payload
  },
  [fetchIssuesFailure]: (state, { payload }) => {
    state.isFetching = false
    state.error = payload
  }
})

export default issuesReducer
