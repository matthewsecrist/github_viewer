import React, { useState } from 'react'
import { Field, Control, Input, Button, Section } from 'rbx'

import { connect } from 'react-redux'

import { fetchUser } from '../store/userSlice'

const SearchInput = ({ fetchUser, name }) => {
  const [input, changeInput] = useState('')

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
        </Field>
      </form>
    </Section>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: input => dispatch(fetchUser(input))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchInput)
