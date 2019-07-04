import React, { useCallback } from 'react'
import { array, func } from 'prop-types'

import { Field, Control, Select, Section } from 'rbx'

const RepoList = ({ repos, chooseRepo }) => {
  const handleChange = useCallback(e => chooseRepo(repos[e.target.value]), [
    chooseRepo,
    repos
  ])
  return (
    <Section>
      <Field align='centered' kind='group'>
        <Control expanded>
          <Select.Container
            size='large'
            color={repos.length >= 1 ? 'primary' : 'dark'}
            onChange={handleChange}
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

RepoList.propTypes = {
  repos: array,
  chooseRepo: func
}

export default RepoList
