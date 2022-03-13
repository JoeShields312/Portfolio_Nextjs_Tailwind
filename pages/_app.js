import '../styles/globals.css'
import styled from 'styled-components';
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// const Component = styled.div`
//     overflow: hidden;
//     overflow-y: scroll;
//     ::-webkit-scrollbar {
//         display: none;
//     }
// `