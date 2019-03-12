import { createAction, createReducer } from 'redux-starter-kit'

export const fetchIssuesRequest = createAction('Issues/request')
export const fetchIssuesSuccess = createAction('Issues/success')
export const fetchIssuesFailure = createAction('Issues/failure')
export const resetIssues = createAction('Issues/Reset')

export const fetchIssues = repo => async dispatch => {
  const issuesUrl = `https://api.github.com/repos/${repo}/issues?per_page=100`
  dispatch(fetchIssuesRequest)
  try {
    const response = await fetch(issuesUrl)

    const result = await response.json()

    return dispatch(fetchIssuesSuccess(result))
  } catch (err) {
    return dispatch(fetchIssuesFailure(err.message))
  }
}

const initialState = {
  isFetching: false,
  hasBeenFetched: false,
  data: [],
  error: null
}

const issuesReducer = createReducer(initialState, {
  [fetchIssuesRequest]: state => {
    state.isFetching = true
  },
  [fetchIssuesSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.hasBeenFetched = true
    state.data = payload
  },
  [fetchIssuesFailure]: (state, { payload }) => {
    state.isFetching = false
    state.error = payload
  },
  [resetIssues]: state => (state = initialState)
})

export default issuesReducer
