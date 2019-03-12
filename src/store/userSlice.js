import { createAction, createReducer } from 'redux-starter-kit'

export const fetchUserRequest = createAction('User/request')
export const fetchUserSuccess = createAction('User/success')
export const fetchUserFailure = createAction('User/failure')
export const resetUser = createAction('User/Reset')

export const fetchUser = name => async dispatch => {
  dispatch(fetchUserRequest())

  try {
    const userResponse = await fetch(`https://api.github.com/users/${name}`)

    if (!userResponse.ok) {
      throw userResponse
    }

    const user = await userResponse.json()

    const repoResponse = await fetch(`${user.repos_url}?per_page=100`)

    if (!repoResponse.ok) {
      throw repoResponse
    }

    const repos = await repoResponse.json()

    return dispatch(fetchUserSuccess({ user, repos }))
  } catch (err) {
    return dispatch(fetchUserFailure(err.statusText))
  }
}

const initialState = {
  isFetching: false,
  hasFetched: false,
  data: null,
  repos: [],
  error: null
}

const userReducer = createReducer(initialState, {
  [fetchUserRequest]: state => {
    state.error = null
    state.hasFetched = false
    state.repos = []
    state.isFetching = true
  },
  [fetchUserSuccess]: (state, { payload: { user, repos } }) => {
    state.isFetching = false
    state.hasFetched = true
    state.data = user
    state.repos = repos
  },
  [fetchUserFailure]: (state, { payload }) => {
    state.isFetching = false
    state.hasFetched = true
    state.error = payload
  },
  [resetUser]: state => (state = initialState)
})

export default userReducer
