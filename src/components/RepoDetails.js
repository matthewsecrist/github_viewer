import React from 'react'
import { connect } from 'react-redux'
import { Title, Container, Delete } from 'rbx'
import AllIssueTags from './AllIssueTags'
import IssuesList from './IssuesList'

import { resetFilter } from '../store/filterSlice'

const RepoDetails = ({ repo, filter, resetFilter }) => {
  return (
    <Container hidden={repo.name === undefined}>
      <Title>{repo.full_name}</Title>
      <p style={{ padding: '20px' }}>
        Current filter: {filter === null ? 'None' : filter.name}{' '}
        <Delete onClick={() => resetFilter()} hidden={!filter} />
      </p>
      <AllIssueTags />
      <IssuesList />
    </Container>
  )
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
