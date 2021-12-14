import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavL from './components/NavL';
import Footer from './components/Footer'

const Languages = () => {
	return (
		<Wrapper>
		<NavL>
		
		</NavL>
		<Footer />
	</Wrapper>
	)
}

export default Languages

const Wrapper = tw.div`
flex flex-col text-center h-full overflow-y-auto
`