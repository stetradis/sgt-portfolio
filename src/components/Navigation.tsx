import { Disclosure } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';
import {BsFillMoonStarsFill, BsSun, BsDownload} from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Portfolio', href: '#portfolio', current: false },
]

const Navigation = (props: any) => {
    const { mode, setMode } = props;

    const toggleDarkMode = () => {
        setMode(!mode);
        try {
            localStorage.setItem('dark', JSON.stringify(!mode));
        }
        catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <Disclosure as="nav" className="">
        {({ open }) => (
            <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 link-hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img
                        className="hidden h-10 w-auto sm:block"
                        src="/st-logo.png"
                        alt="ST logo"
                    />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='rounded-md px-3 py-2 text-xl font-semibold hover:text-teal-600'
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ul className='flex items-center'>
                    <li className='rounded-full shadow-md border border-zinc-200 bg-zinc-100 dark:bg-zinc-800 dark:text-gray-300 px-3 py-2'>
                        {mode ? 
                        <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={toggleDarkMode}/> : 
                        <BsSun className='cursor-pointer text-xl' onClick={toggleDarkMode}/>
                        }
                    </li>
                    <li><a href='/webresume.pdf' target="_blank" download="Stella Tetradis - Resume" className='flex bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded ml-6 gap-2'>Resum&eacute; <BsDownload className='text-xl'/></a></li>
                    </ul>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='block rounded-md px-3 py-2 text-base font-medium hover:text-teal-600'
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            <hr className='h-1 bg-teal-600'/>
            </>
        )}
        </Disclosure>
    );
}

export default Navigation;