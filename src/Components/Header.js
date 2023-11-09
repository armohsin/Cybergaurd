import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowRightOnRectangleIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Icon from '../Images/CG-Logo.png'
import { useUserAuth } from '../Context/UserAuth'
import { Link } from 'react-router-dom'

export default function Header() {

    const { user, logOut } = useUserAuth()

    const handlesubmit = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const navigation = [
        { name: 'Dashboard', href: '/Dasboard', current: false },
        { name: 'Resources', href: '/cg-resources', current: false },
        { name: 'Blogs', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }



    return (
        <Disclosure as="nav" >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 h-16 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={Icon}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-green-900 text-white' : 'text-green-700 hover:bg-green-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 space-2 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <h2 className="hidden md:block" style={{ marginRight: 10 }}>
                                    Welcome <span className='text-green-700' > {user.email}</span>
                                </h2>
                                <button
                                    onClick={handlesubmit}
                                    type="button"
                                    className="relative rounded-full hover:bg-red-700  p-1 text-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                                </button>


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-green-900 text-white' : 'text-green-700 hover:bg-green-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
