import React from 'react'
import { connect } from 'react-redux'
import { Title, Tag, Container, Message, Column } from 'rbx'

const chooseColor = color => {
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)
  var c = (r * 299 + g * 587 + b * 114) / 1000
  return c >= 128 ? 'black' : 'white'
}

const RepoDetails = ({ user, repo, issues, labels }) => {
  return (
    <Container hidden={repo.name === undefined}>
      <Title>{repo.full_name}</Title>
      {labels.map(label => (
        <Tag
          key={label.node_id}
          style={{
            backgroundColor: `#${label.color}`,
            color: `${chooseColor(label.color)}`
          }}
        >
          {label.name}
        </Tag>
      ))}
      {issues.map(issue => {
        return (
          <Message key={issue.id}>
            <Message.Header>
              <p>{issue.title}</p>
              <Column.Group>
                <Column>
                  {issue.labels.map(label => (
                    <Tag
                      key={label.node_id}
                      style={{
                        backgroundColor: `#${label.color}`,
                        color: `${chooseColor(label.color)}`
                      }}
                    >
                      {label.name}
                    </Tag>
                  ))}
                </Column>
              </Column.Group>
            </Message.Header>
            <Message.Body>
              <p>{issue.body.substring(0, 100) + '...'}</p>
            </Message.Body>
          </Message>
        )
      })}
    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  repo: state.repo,
  issues: state.issues.data,
  labels: state.labels.data
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetails)
