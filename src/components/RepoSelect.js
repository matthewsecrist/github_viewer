import React from 'react'
import { array, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { Section } from 'rbx'
import { selectRepo } from '../store/repoSlice'

import RepoList from './RepoList'
import ErrorMessage from './ErrorMessage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const RepoSelect = ({ repos, chooseRepo, error, loading, hasFetched }) => {
  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {repos.length < 1 && hasFetched && !error && (
        <ErrorMessage message='No repos found for that user' />
      )}
      {loading && <FontAwesomeIcon icon={faSpinner} color='black' />}
      {repos.length > 0 && <RepoList repos={repos} chooseRepo={chooseRepo} />}
    </Section>
  )
}

RepoSelect.propTypes = {
  repos: array,
  chooseRepo: func,
  error: bool,
  loading: bool,
  hasFetched: bool
}

const mapStateToProps = state => ({
  repos: state.user.repos,
  loading: state.user.isFetching,
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
