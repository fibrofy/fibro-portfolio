import Link from "next/link";
import navLinks from "../data/navLinks";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import info from "../data/info";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-auto w-full items-center justify-center px-5 py-2 border-b-[1px] border-b-gray-100 bg-white">
      <div className="flex flex-row items-center max-w-5xl justify-between gap-x-8 w-full">
        <div className="w-full">
          <Link href="/">
            <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold tracking-tighter text-black hover:text-accent transition-[5s] ease-linear cursor-pointer w-min">
              {info.name}
            </h1>
          </Link>
        </div>
        <div className="hidden sm:flex flex-row items-center justify-around h-full w-full max-w-xs">
          {navLinks.map((link, key) => (
            <Link href={link.href} key={key}>
              <h1 className="font-semibold tracking-tight text-sm md:text-base 2xl:text-lg text-gray-900 cursor-pointer hover:text-accent transition-[5s] ease-linear">
                {link.name}
              </h1>
            </Link>
          ))}
        </div>
        <Menu as="nav" className="ml-3 relative z-50">
          <Menu.Button className="flex items-center sm:hidden">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setOpen(false)}
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                onClick={() => setOpen(true)}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right mt-2 absolute right-0 w-48 rounded-lg overflow-hidden shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {navLinks.map((e, key) => (
                <Menu.Item key={key}>
                  <Link href={e.href}>
                    <h1 className="px-4 py-2 font-semibold tracking-tight text-sm md:text-base 2xl:text-lg text-gray-900 hover:bg-gray-200 hover:text-accent transition-[5s] ease-linear">
                      {e.name}
                    </h1>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
