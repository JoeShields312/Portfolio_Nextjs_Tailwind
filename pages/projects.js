import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import NavP from './components/NavP'
import Footer from './components/Footer'


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

const Wrapper = tw.div`
flex flex-col text-center h-full overflow-y-auto
`