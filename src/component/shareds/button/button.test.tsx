import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button', () => {
  it('renders button unchanged', () => {
    const { container } = render(<Button label="save" />)
    expect(container).toMatchSnapshot()
  })

  it('renders a button', () => {
    render(<Button label="save" data-testid="button__save" />)

    const button = screen.getByTestId('button__save')

    expect(button).toBeInTheDocument()
  })
})
