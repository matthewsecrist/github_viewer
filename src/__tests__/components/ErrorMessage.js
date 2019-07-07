import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ErrorMessage from '../../components/ErrorMessage'

afterEach(cleanup)

describe('<ErrorMessage />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ErrorMessage message='mock-message' />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
