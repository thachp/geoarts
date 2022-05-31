import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Geometric Arts", href: "/gallery" },
    { name: "Litepaper", href: "/litepaper" },
    { name: "About Me", href: "/about-me" }
];

export const Layout = ({ children }: any) => {
    return (
        <div className="relative bg-gray-800 overflow-hidden h-full">
            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <nav
                        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex items-center flex-1">
                            <div className="hidden space-x-10 md:flex md:ml-10">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="font-medium text-white hover:text-gray-300"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://etherscan.io/token/0x5eaeadda470245343249452e744e423f489abbc4"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                            >
                                Explorer
                            </a>
                        </div>
                    </nav>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://etherscan.io/token/0x5eaeadda470245343249452e744e423f489abbc4"
                                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                >
                                    Explorer
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
            {children}
            <footer>
                <div className="mt-2 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="border-t-none border-gray-200 py-8 text-sm text-gray-500 text-center">
                        <span className="block sm:inline">&copy; 1985-{new Date().getFullYear()} Patrick Thach.</span>{" "}
                        <span className="block sm:inline">All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
