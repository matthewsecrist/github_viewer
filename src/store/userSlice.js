import { createAction, createReducer } from 'redux-starter-kit'

export const selectUser = createAction('User/select')
export const invalidateUser = createAction('User/invalidate')

export const fetchUserRequest = createAction('User/request')
export const fetchUserSuccess = createAction('User/success')
export const fetchUserFailure = createAction('User/failure')

export const fetchUser = name => async dispatch => {
  dispatch(fetchUserRequest)

  try {
    const result = await fetch(
      `https://api.github.com/users/${name}/repos`
    ).then(response => response.json())
    return dispatch(fetchUserSuccess(result))
  } catch (err) {
    return dispatch(fetchUserFailure(err.message))
  }
}

const initialState = {
  isFetching: false,
  repos: [],
  error: null
}

const userReducer = createReducer(initialState, {
  [fetchUserRequest]: state => {
    state.isFetching = true
  },
  [fetchUserSuccess]: (state, { payload }) => {
    state.isFetching = false
    state.repos = payload
  },
  [fetchUserFailure]: (state, { payload }) => {
    state.isFetching = false
    state.error = payload
  }
})

export default userReducer