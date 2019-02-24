import { createAction, createReducer } from 'redux-starter-kit'

export const fetchIssueLabelsRequest = createAction('Label/request')
export const fetchIssueLabelsSuccess = createAction('Label/success')
export const fetchIssueLabelsFailure = createAction('Label/failure')
export const resetLabels = createAction('Label/reset')

export const fetchIssueLabels = repo => async dispatch => {
  const issuesUrl = `https://api.github.com/repos/${repo}/labels`
  dispatch(fetchIssueLabelsRequest)
  try {
    const result = await fetch(issuesUrl).then(response => response.json())

    return dispatch(fetchIssueLabelsSuccess(result))
  } catch (err) {
    return dispatch(fetchIssueLabelsFailure(err.message))
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
