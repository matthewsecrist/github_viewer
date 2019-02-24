import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'rbx'

const IssuesList = ({ issues }) => {
  return (
    <div>
      {issues.map(issue => {
        return (
          <Message key={issue.id}>
            <Message.Header>
              <p>{issue.title}</p>
            </Message.Header>
            <Message.Body>
              <p>{issue.body.substring(0, 100) + '...'}</p>
            </Message.Body>
          </Message>
        )
      })}
    </div>
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

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesList)
