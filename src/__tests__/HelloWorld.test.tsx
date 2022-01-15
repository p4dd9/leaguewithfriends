import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelloWorld } from '../components/HelloWorld'

test('HelloWorld', () => {
	render(<HelloWorld />)

	const helloWorld = screen.getByText('Hello World')
	expect(helloWorld).toBeInTheDocument()
})
