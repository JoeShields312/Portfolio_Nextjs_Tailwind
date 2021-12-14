import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import NavB from './components/NavB';
import Footer from './components/Footer'
import Bio from './components/Bio'
import Projects from './projects';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
	return (
		<Wrapper>
			<NavB>
			</NavB>
		
			<Footer />
		</Wrapper>
	);
}

const Wrapper = tw.div`
flex flex-col text-center h-full overflow-y-auto
`
