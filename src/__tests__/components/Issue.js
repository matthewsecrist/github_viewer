import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Issue from '../../components/Issue'

afterEach(cleanup)

let props

beforeEach(() => {
  props = {
    node_id: 'mock-node-id',
    title: 'mock-title',
    labels: [],
    html_url: 'mock-url',
    body: 'mock-issue-body'
  }
})

describe('<Issue />', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Issue {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches the snapshot with labels', () => {
    const labels = [
      {
        name: 'mock-label-name',
        color: 'mock-label-color',
        node_id: 'mock-id'
      }
    ]

    const { container } = render(<Issue {...props} labels={labels} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
