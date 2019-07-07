import React from 'react'
import { array, string, shape, object, func } from 'prop-types'
import { connect } from 'react-redux'
import { Title, Container, Delete } from 'rbx'
import AllIssueTags from './AllIssueTags'
import IssuesList from './IssuesList'

import { resetFilter } from '../store/filterSlice'

const RepoDetails = ({ repo, filter, resetFilter }) => (
  <Container hidden={repo.name === undefined}>
    <a href={repo.url}>
      <Title>{repo.full_name}</Title>
    </a>
    <Title as='h3' subtitle>
      Open Issues: {repo.open_issues}
    </Title>
    <p>{repo.description}</p>
    <p style={{ padding: '20px' }}>
      Current filter: {filter === null ? 'None' : filter.name}{' '}
      <Delete onClick={resetFilter} hidden={!filter} />
    </p>
    <AllIssueTags />
    <IssuesList />
  </Container>
)

RepoDetails.propTypes = {
  repo: shape({
    name: string,
    url: string,
    full_name: string,
    open_issues: array
  }),
  filter: object,
  resetFilter: func
}

const mapStateToProps = state => ({
  user: state.user,
  repo: state.repo,
  issues: state.issues.data,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  resetFilter: () => dispatch(resetFilter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetails)
