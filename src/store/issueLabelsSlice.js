import { createAction, createReducer } from 'redux-starter-kit'

export const fetchIssueLabelsRequest = createAction('Label/request')
export const fetchIssueLabelsSuccess = createAction('Label/success')
export const fetchIssueLabelsFailure = createAction('Label/failure')
export const resetLabels = createAction('Label/reset')

export const fetchIssueLabels = repo => async dispatch => {
  const issuesUrl = `https://api.github.com/repos/${repo}/labels`
  dispatch(fetchIssueLabelsRequest)
  try {
    const issuesResponse = await fetch(issuesUrl)
    if (!issuesResponse.ok) {
      throw issuesResponse
    }
    const issues = await issuesResponse.json()
    return dispatch(fetchIssueLabelsSuccess(issues))
  } catch (err) {
    return dispatch(fetchIssueLabelsFailure(err.statusText))
  }
}

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

const issueLabelsReducer = createReducer(initialState, {
  [fetchIssueLabelsRequest]: state => {
    state.isFetching = true
  },
  [fetchIssueLabelsSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.data = payload
  },
  [fetchIssueLabelsFailure]: (state, { payload }) => {
    state.isFetching = false
    state.error = payload
  },
  [resetLabels]: state => (state = initialState)
})

export default issueLabelsReducer
