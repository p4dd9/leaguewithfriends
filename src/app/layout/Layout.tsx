import React from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'

const StyledLayout = styled.div``

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }: MainLayoutProps) => {
	return (
		<StyledLayout>
			{children}
			<Footer />
		</StyledLayout>
	)
}

export default MainLayout
