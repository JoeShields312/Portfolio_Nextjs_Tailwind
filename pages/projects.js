import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import NavP from './components/NavP'
import Footer from './components/Footer'
import styled from 'styled-components';

const Projects = () => {
	return (
		<Wrapper>
		<NavP>
		
		</NavP>
		<Footer />
	</Wrapper>
	)
}

export default Projects

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`