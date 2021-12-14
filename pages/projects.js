import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavP from './components/NavP'
import Footer from './components/Footer'
import FeatureProjects from './components/FeatureProjects';

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