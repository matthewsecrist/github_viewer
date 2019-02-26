import React from 'react'

import { Field, Control, Select, Section } from 'rbx'

const RepoList = ({ repos, chooseRepo }) => {
  const handleChange = e => chooseRepo(repos[e.target.value])
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

export default RepoList
