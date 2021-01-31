import { render } from '@testing-library/react'
import Index from '../../pages/index'

test('App renders without error', () => {
    const { getByTestId } = render(<Index />)
    const element = getByTestId('movies-app')
    expect(element).toBeTruthy()
})

