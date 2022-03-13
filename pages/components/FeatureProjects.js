/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon, TerminalIcon } from '@heroicons/react/outline'
import tw from 'tailwind-styled-components';


export default function FeatureProjects() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
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
                  Coinbase-Blockchain-Application
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Replica of the Coinbase application. Utilizes thirdweb, sanity for the back end, also Next.js and styled components for the front end. 
                </p>
                <div className="mt-6">
                  <a
                    href="https://coinbase-blockchain-app-gules.vercel.app/"
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
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
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
                  The Faderoom barbershop website. Utilizes headless wordpress, next.js, tailwind, & apollo.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.thefaderoominc.com/"
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
                src="https://drive.google.com/uc?id=1FeU8nVeR3fFVLxaSPLWq-bkOsxRk1DR7"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
