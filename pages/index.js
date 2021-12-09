import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import Nav from './components/Nav';


export default function Home() {
	return (
		<Wrapper>
			<Nav>
			</Nav>
		</Wrapper>
	);
}

const Wrapper = tw.div`
flex flex-col text-center h-screen
`;
