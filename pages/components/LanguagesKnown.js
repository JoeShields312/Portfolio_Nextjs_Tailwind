/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    ChipIcon,
    DesktopComputerIcon
  } from '@heroicons/react/outline'
  import tw from 'tailwind-styled-components';


  const features = [
    { name: 'Front-End', icon: DesktopComputerIcon, description: 'HTML\n' + 'CSS\n' + 'JavaScript\n' + 'React\n' + 'Next.js\n' + 'Tailwind\n'},
    { name: 'Back-End', icon: ServerIcon, description: 'SQL\n' + 'MongoDB\n' + 'Python\n' + 'WPGraphQL\n' + 'GraphQL\n' + 'Firebase\n' + 'Thirdweb\n' + 'Sanity'},
    { name: 'Tools', icon: ChipIcon, description: 'WordPress GitHub GitLab Vercel Apollo Figma' }
  ]

  export default function LanguagesKnown() {
    
    return (
      <div className="relative bg-white py-12 sm:py-12 lg:py-56">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Joe Shields</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Technical Abilities
          </p>
          <p className="mt-2 max-w-prose mx-auto text-xl text-gray-500">
           Specialist Generalist
          </p>
          <div className="mt-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-1">
                  <div className="flow-root bg-gray-200 rounded-lg px-6 pb-auto">
                    <div className="mt-4 pb-2 inline-block">
                      <div>
                        <span className="inline-flex text-center items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="animate-bounce h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-2 table-caption font-semibold text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  