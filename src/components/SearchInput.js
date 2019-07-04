import React, { useState } from 'react'
import { func, bool } from 'prop-types'
import { Field, Control, Input, Button, Section } from 'rbx'

import { connect } from 'react-redux'

import { fetchUser } from '../store/userSlice'
import { reset } from '../store/reset'

const SearchInput = ({ fetchUser, reset, dataCurrentlyExists }) => {
  const [input, changeInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (input.length >= 1) {
      if (dataCurrentlyExists) {
        reset()
      }
      fetchUser(input)
      changeInput('')
    }
  }

  const handleChange = e => changeInput(e.target.value)

  return (
    <Section backgroundColor='dark'>
      <form onSubmit={handleSubmit}>
        <Field kind='addons'>
          <Control expanded>
            <Input
              size='large'
              placeholder='Enter a User Name'
              onChange={handleChange}
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
              onClick={reset}
              disabled={!dataCurrentlyExists}
            >
              Reset
            </Button>
          </Control>
        </Field>
      </form>
    </Section>
  )
}

SearchInput.propTypes = {
  fetchUser: func,
  reset: func,
  dataCurrentlyExists: bool
}

const mapStateToProps = state => ({
  dataCurrentlyExists: state.issues.hasBeenFetched
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: input => dispatch(fetchUser(input)),
    reset: () => dispatch(reset())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)
