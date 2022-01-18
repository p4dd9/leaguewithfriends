import React from 'react'
import { BsGithub } from 'react-icons/bs'
import styled from 'styled-components'

export const Footer = () => {
	return (
		<StyledFooter>
			<IconsWrapper>
				<a href="https://github.com/p4dd9/leaguewithfriends" rel="noreferrer" target="_blank">
					<BsGithub size={24} />
				</a>
			</IconsWrapper>
			<LastUpdateWrapper>
				<p style={{ fontSize: '12px' }}>
					Last update:{' '}
					{new Intl.DateTimeFormat('en-AT', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Europe/Vienna' }).format(
						new Date()
					)}
				</p>
			</LastUpdateWrapper>
		</StyledFooter>
	)
}

const LastUpdateWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const IconsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledFooter = styled.footer`
	margin-bottom: 24px;

	svg {
		color: ${(p) => p.theme.color.decentBeton};
	}

	a {
		display: inline-block;
		padding: ${(p) => p.theme.space.s}px;
	}
`
