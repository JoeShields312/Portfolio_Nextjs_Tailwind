import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import NavL from './components/NavL';
import Footer from './components/Footer'
import Head from "next/head";
import styled from 'styled-components';

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

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100%;
    overflow: scroll;
`
