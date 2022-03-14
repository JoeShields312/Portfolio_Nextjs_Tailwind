import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import NavB from './components/NavB';
import Footer from './components/Footer'
import React, { useEffect } from 'react'
import styled from 'styled-components';



export default function Home() {
	return (
		<Wrapper>
			<NavB>
			</NavB>
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100%;
    overflow: auto;
`
