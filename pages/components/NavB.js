import { ReactElement } from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	MailIcon,
	TerminalIcon,
	MenuIcon,
	XIcon,
	BriefcaseIcon,
	HomeIcon
} from '@heroicons/react/outline';
import tw from 'tailwind-styled-components';
import Bio from './Bio';
import LanguagesKnown from './LanguagesKnown';
import FeatureProjects from './FeatureProjects';
import Link from 'next/link';
import { Route, Switch } from 'react-router';
// import LandingLayout from '../../layouts/landing/LandingLayout'
// import AppLayout from '../../layouts/app/AppLayout'

library.add(fab);

{/* <Switch>
  <Route path="./LanguagesKnown.js" component={LanguagesKnown}/> 
  <Route path="./FeatureProjects.js" component={FeatureProjects} />
  <Route component={NotFound} />
</Switch> */}

const user = {
	name: 'Joe Shields',
	email: 'Shields.John.Joseph@gmail.com',
	imageUrl: 'https://drive.google.com/uc?id=1sQIuxYprbofLN__tpEBbR7urzJFVBRj6'
};
const navigation = [
	{ name: 'About', href: '/', children: [] },
	{ name: 'Projects', href: '/projects', children: [] },
	{ name: 'Languages & Tools', href: '/languages', children: [] },
	{ name: 'Contact', href: 'mailto:shields.john.joseph@gmail.com', children: [] }
];
const sidebarNavigation = [
	{ name: 'About', href: '/', icon: HomeIcon, current: false },
	{ name: 'Projects', href: '/projects', icon: BriefcaseIcon, current: false },
	{ name: 'Languages & Tools', href: 'languages', icon: TerminalIcon, current: false },
	{ name: 'Contact', href: 'mailto:shields.john.joseph@gmail.com', icon: MailIcon, current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full overflow-hidden">
        ```
      */}
			<div className='h-full flex flex-col overflow-auto'>
				{/* Top nav*/}
				<header className='flex-shrink-0 relative h-16 bg-gray-800 flex items-center'>
					{/* Logo area */}
					<div className='absolute inset-y-0 left-0 md:static md:flex-shrink-0'>
						<a
							href='./'
							className='flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20'
						>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
								alt='Workflow'
							/>
						</a>
					</div>
					{/* Menu button area */}
					<div className='absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden'>
						{/* Mobile menu button */}
						<button
							type='button'
							className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className='sr-only'>Open main menu</span>
							<MenuIcon className='block h-6 w-6' aria-hidden='true' />
						</button>
					</div>

					{/* Desktop nav area */}
					<div className='hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between'>
						<div className='min-w-0 flex-1'>
							<div className='max-w-2xl relative text-gray-400 focus-within:text-gray-500'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4'></div>
							</div>
						</div>
						<div className='ml-10 pr-4 flex-shrink-0 flex items-center space-x-10'>
							<nav aria-label='Global' className='flex space-x-10'></nav>
							<div className='flex items-center space-x-8'>
								<Menu as='div' className='relative inline-block text-left'>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'></Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					{/* Mobile menu, show/hide this `div` based on menu open/closed state */}
					<Transition.Root show={mobileMenuOpen} as={Fragment}>
						<Dialog
							as='div'
							className='fixed inset-0 z-40 md:hidden'
							onClose={setMobileMenuOpen}
						>
							<Transition.Child
								as={Fragment}
								enter='transition-opacity ease-linear duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='transition-opacity ease-linear duration-300'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<Dialog.Overlay className='hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75' />
							</Transition.Child>

							<Transition.Child
								as={Fragment}
								enter='transition ease-out duration-150 sm:ease-in-out sm:duration-300'
								enterFrom='transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
								enterTo='transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
								leave='transition ease-in duration-150 sm:ease-in-out sm:duration-300'
								leaveFrom='transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
								leaveTo='transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100'
							>
								<nav
									className='fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg'
									aria-label='Global'
								>
									<div className='h-16 flex items-center justify-between px-4 sm:px-6'>
										<a href='./'>
											<img
												className='block h-8 w-auto'
												src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
												alt='Workflow'
											/>
										</a>
										<button
											type='button'
											className='-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'
											onClick={() => setMobileMenuOpen(false)}
										>
											<span className='sr-only'>Close main menu</span>
											<XIcon className='block h-6 w-6' aria-hidden='true' />
										</button>
									</div>

									<div className='max-w-8xl mx-auto py-3 px-2 sm:px-4'>
										{navigation.map(item => (
											<Fragment key={item.name}>
												<a
													href={item.href}
													className='block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100'
												>
													{item.name}
												</a>
												{item.children.map(child => (
													<a
														key={child.name}
														href={child.href}
														className='block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100'
													>
														{child.name}
													</a>
												))}
											</Fragment>
										))}
									</div>
									<div className='border-t border-gray-200 pt-4 pb-3'>
								
									</div>
								</nav>
							</Transition.Child>
						</Dialog>
					</Transition.Root>
				</header>

				{/* Bottom section */}
				<div className='flex-1 flex'>
					{/* Narrow sidebar*/}
					<nav
						aria-label='Sidebar'
						className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'
					>
						<div className='relative w-20 flex flex-col p-3 space-y-3'>
							{sidebarNavigation.map(item => (
					
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-400 hover:bg-gray-700',
										'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
									)}
								>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							
							))}
						</div>
					</nav>
					{/* Main area */}
					<div className='w-full h-full'>
						<Bio /> 
					</div>
					{/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
					
				</div>
			</div>
	
		</>
	);
}
