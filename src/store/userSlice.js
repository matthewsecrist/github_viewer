import { createAction, createReducer } from 'redux-starter-kit'

export const fetchUserRequest = createAction('User/request')
export const fetchUserSuccess = createAction('User/success')
export const fetchUserFailure = createAction('User/failure')
export const resetUser = createAction('User/Reset')

export const fetchUser = name => async dispatch => {
  dispatch(fetchUserRequest())

  try {
    const result = await fetch(
      `https://api.github.com/users/${name}/repos`
    ).then(response => {
      if (!response.ok) {
        throw response
      } else {
        return response.json()
      }
    })

    return dispatch(fetchUserSuccess(result))
  } catch (err) {
    return dispatch(fetchUserFailure(err.statusText))
  }
}

const initialState = {
  isFetching: false,
  hasFetched: false,
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
  [fetchUserSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.hasFetched = true
    state.repos = payload
  },
  [fetchUserFailure]: (state, { payload }) => {
    state.isFetching = false
    state.hasFetched = true
    state.error = payload
  },
  [resetUser]: state => (state = initialState)
})

export default userReducer
