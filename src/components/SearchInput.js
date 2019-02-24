import React, { useState } from 'react'
import { Field, Control, Input, Button, Section } from 'rbx'

import { connect } from 'react-redux'

import { fetchUser, reset } from '../store/userSlice'

const SearchInput = ({ fetchUser, reset }) => {
  const [input, changeInput] = useState('ReduxJS')

  const handleSubmit = e => {
    e.preventDefault()
    fetchUser(input)
    changeInput('')
  }
  return (
    <Section backgroundColor='dark'>
      <form onSubmit={e => handleSubmit(e)}>
        <Field kind='addons'>
          <Control expanded>
            <Input
              size='large'
              placeholder='Enter a User Name'
              onChange={e => changeInput(e.target.value)}
              value={input}
            />
          </Control>
          <Control>
            <Button color='primary' size='large' type='submit'>
              Submit
            </Button>
          </Control>
          <Control>
            <Button
              type='button'
              color='danger'
              size='large'
              onClick={() => reset()}
            >
              Reset
            </Button>
          </Control>
        </Field>
      </form>
    </Section>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: input => dispatch(fetchUser(input)),
    reset: () => dispatch(reset())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchInput)
