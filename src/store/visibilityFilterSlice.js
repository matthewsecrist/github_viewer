import { createSlice } from 'redux-starter-kit'

const VisibilityFilterSlice = createSlice({
  initialState: null,
  reducers: {
    setFilter: (state, action) => (state = action.payload)
  }
})

const { actions, reducer } = VisibilityFilterSlice
export const { setFilter } = actions
export default reducer
