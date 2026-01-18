import Image from 'next/image'
import React from 'react'

function Search() {
    return (
        <div>
            <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5" />
            <div className="hidden lg:block lg:max-w-md lg:flex-auto">
                <button
                    className="focus:[&:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
                    type="button">
                    <Image alt='Search' width={100} height={24} className="h-5 w-5" src='/search.svg' />
                    <input
                        className="flex-1 focus:border-none focus:outline-none"
                        placeholder="Search..."
                        type="text"
                    />
                    <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                        <kbd className="font-sans">Ctrl </kbd>
                        <kbd className="font-sans">K</kbd>
                    </kbd>
                </button>
            </div>
            <div className="flex items-center gap-5 lg:hidden">
                <button
                    aria-label="Toggle navigation"
                    className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                    type="button">
                    <img
                        alt="Menu"
                        className="w-2.5 stroke-zinc-900 dark:stroke-white"
                        src="./assets/icons/hamburger.svg"
                    />
                </button>
                {/* <a aria-label="Home" href="/"> */}
                <img alt="Protocol" className="h-6" src="./assets/icons/logo.svg" />
                {/* </a> */}
            </div>
            <div className="flex items-center gap-5">
                <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
                <div className="flex gap-4">
                    <div className="contents lg:hidden">
                        <button
                            aria-label="Find something..."
                            className="focus:[&:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                            type="button">
                            <img
                                alt="Search"
                                className="h-5 w-5"
                                src="./assets/icons/search.svg"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search