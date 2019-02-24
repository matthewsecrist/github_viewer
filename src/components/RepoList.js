import React from 'react'
import { connect } from 'react-redux'
import { Field, Control, Select, Section } from 'rbx'

const RepoList = ({ repos }) => {
  return (
    <Section>
      <Field align='centered' kind='group'>
        <Control>
          <Select.Container size='large' fullwidth>
            <Select>
              <Select.Option value=''>
                {repos.length > 1 ? 'Select Repo' : 'Select Repo'}
              </Select.Option>
              {repos &&
                repos.map(repo => (
                  <Select.Option key={repo.id} value={repo.name}>
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

export default connect(mapStateToProps)(RepoList)
