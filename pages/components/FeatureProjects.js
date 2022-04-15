/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon, TerminalIcon } from '@heroicons/react/outline'
import tw from 'tailwind-styled-components';


export default function FeatureProjects() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-auto overflow-x-hidden">

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Coinbase Blockchain Application
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Replica of the Coinbase application. Utilizes MetaMask, Thirdweb, Sanity.io, Next.js and styled components. *Note: You need a MetaMask Wallet to interact with this application.
                </p>
                <div className="mt-6">
                  <a
                    href="https://coinbase-blockchain-app-gules.vercel.app/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                  Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1n3yblcfiItBib7nZ0riGWalW8jNjHYVS"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Uber Blockchain App
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  *Under Construction* A clone version of the Uber App that allows crypto payment. Utilizes Next.js, Ethers.js, Sanity.io, MetaMask, and Tailwind CSS. *Note: You need a MetaMask Wallet to interact with this application.
                </p>
                <div className="mt-6">
                  <a
                    href="https://uber-clone-blockchain-xi-gray.vercel.app/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img         
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1m6sq6eAcdwBCfosq69Z40kqDHxnsop6P"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                The Fade Room Barbershop
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                The Faderoom barbershop website. Utilizes headless Wordpress, Next.js, Apollo, and Tailwind CSS.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.thefaderoominc.com/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                  Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1FeU8nVeR3fFVLxaSPLWq-bkOsxRk1DR7"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Inaum Salon
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Inaum Salon website, updated existing website's UI/UX and SEO.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.inaumsalon.com/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img         
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1A_r9AdDt2xGGuxv6PzmRCl265zmN4t0f"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Smith Research
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Smith Research website, updated existing UI/UX and SEO.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.smithresearch.com/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                  Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1XCKLpDYQG17hGk8-bUqSAn9dREng-AYX"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Weather Dashboard
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Weather Dashboard that display a 5 day weather report after searching for a location.
                </p>
                <div className="mt-6">
                  <a
                    href="https://weather-dashboard-mauve.vercel.app/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img         
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1Xac2x1o7TWblgYXZChzPJjkquCv793dF"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <TerminalIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Avengers Quiz
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  A 10 question multiple choice quiz about the Avengers, utilizes Javascript, HTML, and CSS. Note* This is the first website I created.
                </p>
                <div className="mt-6">
                  <a
                    href="https://avengers-quiz-tau.vercel.app/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                  Launch Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://drive.google.com/uc?id=1T9I4R_8qlxr6fz7Qp2DmTXB2tPXjZdBm"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
