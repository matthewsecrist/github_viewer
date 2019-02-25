import React from 'react'
import { connect } from 'react-redux'
import { Section, Loader } from 'rbx'

import RepoList from '../components/RepoList'
import { selectRepo } from '../store/repoSlice'
import ErrorMessage from '../components/ErrorMessage'

const RepoSelect = ({ repos, chooseRepo, error, loading, hasFetched }) => {
  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {repos.length < 1 && hasFetched && !error && (
        <ErrorMessage message='No repos found for that user' />
      )}
      {loading && <Loader />}
      {repos.length > 0 && <RepoList repos={repos} chooseRepo={chooseRepo} />}
    </Section>
  )
}

const mapStateToProps = state => ({
  repos: state.user.repos,
  loading: state.user.isLoading,
  error: state.user.error,
  hasFetched: state.user.hasFetched
})

const mapDispatchToProps = dispatch => ({
  chooseRepo: repo => dispatch(selectRepo(repo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSelect)
