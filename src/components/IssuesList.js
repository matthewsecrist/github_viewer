import Issue from './Issue'
import { issuesFilter } from '../store/selectors'
import { connect } from 'react-redux'

import { map } from 'ramda'

// IssuesList :: [issue] -> <Issue {...issue}] />
const issuesList = map(Issue)

const IssuesList = ({ issues }) => issuesList(issues)

const mapStateToProps = (state = {}) => ({
  issues: issuesFilter(state)
})

export default connect(mapStateToProps)(IssuesList)
