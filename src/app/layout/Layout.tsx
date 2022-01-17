import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div``

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }: MainLayoutProps) => {
	return <StyledLayout>{children}</StyledLayout>
}

export default MainLayout
