import { createSlice } from 'redux-starter-kit'

const VisibilityFilterSlice = createSlice({
  initialState: null,
  reducers: {
    setFilter: (state, action) => (state = action.payload),
    resetFilter: state => (state = null)
  }
})

const { actions, reducer } = VisibilityFilterSlice
export const { setFilter, resetFilter } = actions
export default reducer
