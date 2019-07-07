import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Tags from '../../components/Tags'

afterEach(cleanup)

const labels = [
  {
    name: 'mock-label-name',
    color: 'mock-label-color',
    node_id: 'mock-id'
  }
]

const mockSetFilter = jest.fn()

describe('<Tags />', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Tags labels={labels} setFilter={mockSetFilter} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('does not display when no labels are provided', () => {
    const { container } = render(<Tags labels={[]} setFilter={mockSetFilter} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('selects the filter when clicked', async () => {
    const { getByTestId } = render(
      <Tags labels={labels} setFilter={mockSetFilter} />
    )

    const el = await getByTestId('tags')
    fireEvent.click(el)

    expect(mockSetFilter).toHaveBeenCalled()
    expect(mockSetFilter).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'mock-label-name' })
    )
  })
})
