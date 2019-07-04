import { createAction, createReducer } from 'redux-starter-kit'
import { evolve, uncurryN, pipe, objOf, mergeDeepRight, T, F } from 'ramda'

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

// handleRequest :: object -> object
const handleRequest = evolve({
  isFetching: T
})

// handleSuccess :: state -> payload -> object
const handleSuccess = uncurryN(2, state =>
  pipe(
    objOf('data'),
    mergeDeepRight(state),
    evolve({
      isFetching: F
    })
  )
)

const handleFailure = uncurryN(2, state =>
  pipe(
    objOf('error'),
    mergeDeepRight(state),
    evolve({
      isFetching: F
    })
  )
)

const issueLabelsReducer = createReducer(initialState, {
  [fetchIssueLabelsRequest]: handleRequest,
  [fetchIssueLabelsSuccess]: (state, { payload }) =>
    handleSuccess(state, payload),
  [fetchIssueLabelsFailure]: (state, { payload }) =>
    handleFailure(state, payload),
  [resetLabels]: state => (state = initialState)
})

export default issueLabelsReducer
