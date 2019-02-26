import React from 'react'
import Issue from './Issue'

import { connect } from 'react-redux'

const IssuesList = ({ issues }) => {
  return (
    <React.Fragment>
      {issues.map(issue => (
        <Issue key={issue.node_id} {...issue} />
      ))}
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  issues: state.issues.data.filter(issue => {
    if (state.filter) {
      return issue.labels.some(label => label.id === state.filter.id)
    }
    return issue
  })
})

export default connect(mapStateToProps)(IssuesList)
