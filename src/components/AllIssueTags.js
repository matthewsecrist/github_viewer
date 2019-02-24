import { connect } from 'react-redux'
import { setFilter } from '../store/filterSlice'

import Tags from './Tags'

const mapStateToProps = state => ({
  labels: state.labels.data
})

const mapDispatchToProps = dispatch => ({
  setFilter: label => dispatch(setFilter(label))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags)
