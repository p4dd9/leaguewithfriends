import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import styled from 'styled-components'

export const Footer = () => {
	return (
		<StyledFooter>
			<a href="https://github.com/p4dd9/leaguewithfriends" rel="noreferrer" target="_blank">
				<BsGithub size={24} />
			</a>

			<a href="https://twitter.com/p4dd9" rel="noreferrer" target="_blank">
				<AiFillTwitterCircle size={28} />
			</a>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	margin-bottom: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		color: ${(p) => p.theme.color.decentBeton};
	}

	a {
		display: inline-block;
		padding: ${(p) => p.theme.space.s}px;
	}
`
