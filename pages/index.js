import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Nav from './components/Nav'



export default function Home() {
  return (
    
    <Wrapper>
      <Nav>
      <div>Bio</div>
      <div>Technology and Languages Used </div>
      <div>Projects</div>
      <div>Contact Info</div>
      <div>Footer</div>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = tw.div`
felx flex-col text-center h-screen
`
