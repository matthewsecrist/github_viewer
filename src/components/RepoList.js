import React from 'react'
import { connect } from 'react-redux'
import { Field, Control, Select, Section } from 'rbx'

import { selectRepo } from '../store/selectRepoSlice'

const RepoList = ({ repos, chooseRepo }) => {
  return (
    <Section>
      <Field align='centered' kind='group'>
        <Control expanded>
          <Select.Container
            size='large'
            color={repos.length >= 1 ? 'primary' : 'dark'}
            onChange={e => {
              chooseRepo(repos[e.target.value])
            }}
            fullwidth
          >
            <Select>
              {repos.map((repo, index) => (
                <Select.Option key={index} value={index}>
                  {repo.name}
                </Select.Option>
              ))}
            </Select>
          </Select.Container>
        </Control>
      </Field>
    </Section>
  )
}

const mapStateToProps = state => ({
  repos: state.user.repos
})

const mapDispatchToProps = dispatch => ({
  chooseRepo: repo => dispatch(selectRepo(repo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)
